    let vaha = document.getElementById("vaha");
    let vyska = document.getElementById("vyska");
    let vek = document.getElementById("vek");
    let spocitatBMR = document.getElementById("spocitatBMR");
    let vysledekPrijem = document.getElementById("vysledek-prijem");
    let spocitatTDEE = document.getElementById("spocitatTDEE");
    let aktivita12 = document.getElementById("12");
    let aktivita14 = document.getElementById("14");
    let aktivita16 = document.getElementById("16");
    let aktivita18 = document.getElementById("18");
    let aktivita20 = document.getElementById("20");
    let aktivita22 = document.getElementById("22");
    let vysledek = document.getElementById("vysledek");
    let vysledekAktivita = document.getElementById("vysledekAktivita");
    let muz = document.getElementById("muz");
    let zena = document.getElementById("zena");

    function BMRZena() {
        vysledek.innerHTML = (Math.floor(655.0955 + (9.5634 * parseInt(vaha.value)) + (1.8496 * parseInt(vyska.value)) - (4.6756 * parseInt(vek.value))) + " kcal/den");
    }
    function BMRMuz() {
        vysledek.innerHTML = (Math.floor(66.473 + (13.7516 * parseInt(vaha.value)) + (5.0033 * parseInt(vyska.value)) - (6.755 * parseInt(vek.value))) + " kcal/den");
    }

    spocitatBMR.onclick = function() {
        if(muz.checked)
            BMRMuz();
        else
            BMRZena();
    }

    
//ZJISTÍ HODNOTU AKTIVITY
    function displayRadioValue() {
        let ele = document.getElementsByName('aktivita');
          
        for(i = 0; i < ele.length; i++) {
            if((ele[i].checked && muz.checked)) {
                let vysledekMuz = (Math.floor(66.473 + (13.7516 * parseInt(vaha.value)) + (5.0033 * parseInt(vyska.value)) - (6.755 * parseInt(vek.value)))) * parseFloat(ele[i].value);
                let vysledekMuzZaokrouhleny = vysledekMuz.toFixed(1);
                vysledekAktivita.innerHTML =  vysledekMuzZaokrouhleny + " kcal/den";
            }
            else if((ele[i].checked && zena.checked)) {
                let vysledekZena = (Math.floor(655.0955 + (9.5634 * parseInt(vaha.value)) + (1.8496 * parseInt(vyska.value)) - (4.6756 * parseInt(vek.value)))) * parseFloat(ele[i].value);
                let vysledekZenaZaokrouhleny = vysledekZena.toFixed(1)
                vysledekAktivita.innerHTML = vysledekZenaZaokrouhleny + " kcal/den";
            }
        }
    }
    



       