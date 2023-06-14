var dropdown = document.getElementById('myDropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation(); // Zajistí, aby se dropdown nezavřel
});


let pridatDoKosikuArasidoveMaslo = document.getElementById("pridat-do-kosiku-arasidove-maslo");
let pridatDoKosikuKreatin = document.getElementById("pridat-do-kosiku-kreatin");
let pridatDoKosikuProtein = document.getElementById("pridat-do-kosiku-protein");
let pridatDoKosikuMultivitamin = document.getElementById("pridat-do-kosiku-multivitamin");

let kosikTabulka = document.getElementById("kosik-tabulka");

// Funkce pro přidání položky do košíku
let pridatDoKosiku = function(nazevProduktu, cena) {
  let noveTr = document.createElement("tr");
  let noveTdProdukt = document.createElement("td");
  let noveTdCena = document.createElement("td");
  let noveTdAkce = document.createElement("td");
  let odstranitBtn = document.createElement("button");

  noveTdProdukt.innerHTML = nazevProduktu;
  noveTdCena.innerHTML = cena;

  // Přidání tlačítka pro odstranění položky
  odstranitBtn.innerHTML = "Odstranit";
  odstranitBtn.onclick = function() {
    noveTr.remove();
    odstranitPolozkuZLocalStorage(nazevProduktu);
  };

  noveTr.appendChild(noveTdProdukt);
  noveTr.appendChild(noveTdCena);
  noveTdAkce.appendChild(odstranitBtn);
  noveTr.appendChild(noveTdAkce);
  kosikTabulka.appendChild(noveTr);
};

// Funkce pro uložení položky do localStorage
let ulozitPolozkuDoLocalStorage = function(nazevProduktu, cena) {
  let kosikPolozky = localStorage.getItem("kosikPolozky");
  let polozky = [];

  if (kosikPolozky) {
    polozky = JSON.parse(kosikPolozky);
  }

  polozky.push({ nazev: nazevProduktu, cena: cena });
  localStorage.setItem("kosikPolozky", JSON.stringify(polozky));
};

// Funkce pro odstranění položky z localStorage
let odstranitPolozkuZLocalStorage = function(nazevProduktu) {
  let kosikPolozky = localStorage.getItem("kosikPolozky");
  let polozky = [];

  if (kosikPolozky) {
    polozky = JSON.parse(kosikPolozky);
    polozky = polozky.filter(function(polozka) {
      return polozka.nazev !== nazevProduktu;
    });
    localStorage.setItem("kosikPolozky", JSON.stringify(polozky));
  }
};

// Funkce pro načtení uložených položek při načítání stránky
let nacistUlozenePolozky = function() {
  let kosikPolozky = localStorage.getItem("kosikPolozky");

  if (kosikPolozky) {
    let polozky = JSON.parse(kosikPolozky);

    // Vyčištění tabulky před načtením položek
    kosikTabulka.innerHTML = "";

    polozky.forEach(function(polozka) {
      pridatDoKosiku(polozka.nazev, polozka.cena);
    });
  }
};

// Obsluha události po kliknutí na tlačítko "Přidat do košíku"
pridatDoKosikuArasidoveMaslo.onclick = function() {
  pridatDoKosiku("Arašídové máslo", 369);
  ulozitPolozkuDoLocalStorage("Arašídové máslo", 369);
};
pridatDoKosikuKreatin.onclick = function() {
  pridatDoKosiku("Kreatin - Crea7in", 289);
  ulozitPolozkuDoLocalStorage("Kreatin - Crea7in", 289);
};
pridatDoKosikuProtein.onclick = function() {
  pridatDoKosiku("Protein Just Whey", 150);
  ulozitPolozkuDoLocalStorage("Protein Just Whey", 150);
};
pridatDoKosikuMultivitamin.onclick = function() {
  pridatDoKosiku("Multivitamín Vitality Complex", 189);
  ulozitPolozkuDoLocalStorage("Multivitamín Vitality Complex", 189);
};

// Načtení uložených položek při načítání stránky
nacistUlozenePolozky();


