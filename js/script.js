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
var buttonReset = document.getElementById('reset');
var alertError = document.getElementById('alert-error');


//Riferimenti Ticket
var ticketTitle = document.getElementById('ticket-title');
var sectionTicket = document.getElementById('ticket');
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


    if (!nameValue || nameValue.trim() === '' || !isNaN(nameValue) || !kmsValue || kmsValue.trim() === '' || isNaN(kmsValue) || kmsValue < 10) {

        alertError.classList.remove('d-none');

    }

    else {



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


        fullPrice = 'Euro ' + fullPrice.toFixed(2);

        // Codice treno 

        trainNumber = '763689RF';

        //Numero carrozza

        carNumber = Math.floor(Math.random() * 12) + 1;


        // stampiamo

        passengerName.innerHTML = nameValue;
        passengerTrain.innerHTML = trainNumber;
        passengerCar.innerHTML = carNumber;
        passengerPrice.innerHTML = fullPrice;
        passengerDiscount.innerHTML = discountMessage;

        // riazzero i campi

        formName.value = '';
        formKms.value = '10';
        formAge.value = 'mag';

        // mostriamo la sezione ticket

        sectionTicket.classList.remove('hidden');
        ticketTitle.classList.remove('hidden');


    }

});

// bottone Reset

buttonReset.addEventListener('click', function () {

    //nascondiamo la sezione

    sectionTicket.classList.add('hidden');
    ticketTitle.classList.add('hidden');

    //resettiamo il form

    formName.value = '';
    formKms.value = '10';
    formAge.value = 'mag';


})
