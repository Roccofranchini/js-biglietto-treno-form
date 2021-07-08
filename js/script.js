/*

1- creare i riferimenti agli input del form
2- creo un bottone il cui click darà il via alle operazioni
3- raccolgo i dati dell'utente
4- calcolo il prezzo ed eventuali sconti
5- stampiamo


*/


//Riferimenti FORM

var formName = document.getElementById('formname');
var formKms = document.getElementById('formkms');
var formAge = document.getElementById('formage');
var buttonSubmit = document.getElementById('submit');


//Riferimenti Ticket

var passengerName = document.getElementById('passenger-name');
var passengerTrain = document.getElementById('passenger-train');
var passengerCar = document.getElementById('passenger-car');
var passengerPrice = document.getElementById('passenger-price');
var passengerDiscount = document.getElementById('passenger-discount');

// Bottone

buttonSubmit.addEventListener('click', function () {

    //recuperiamo i valori del form

    var nameValue = formName.value;
    var kmsValue = formKms.value;
    var ageValue = formAge.value;

    //calcolo il prezzo del biglietto

    var fullPrice = kmsValue * 0.21;
    var discountMessage = 'tariffa standard';

    if (ageValue === 'Minorenne') {
        fullPrice *= 0.8;
        var discountMessage = 'tariffa junior';
    }

    if (ageValue === 'Over 65') {
        fullPrice *= 0.6;
        var discountMessage = 'tariffa senior';
    }

    // Codice treno 

    passengerTrain = '763689RF';





});
