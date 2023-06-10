console.log('JS OK');

// Preliminari
const cd = document.getElementById('cd');
const randomNumbersTarget = document.getElementById('random-numbers');
const randomNumbersContainer = document.getElementById('random-container');
const resultTarget = document.getElementById('result');
const resultsBox = document.getElementById('results-box');
const userInput = document.querySelectorAll('input');
const form = document.getElementById('form');
const button = document.getElementById('guess-button');
const resetButton = document.getElementById('reset-button');
const correctNumbers = [];

resetButton.addEventListener('click', () => {
    location.reload();
});

// Funzioni
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// Genero 5 numeri casuali diversi
const randomNumbers = [];
while(randomNumbers.length < 5) {
    let number = getRandomNumber(10,100);
    if(randomNumbers.includes(number)){
        number = getRandomNumber(10,100);
    } else {
        randomNumbers.push(number);
    }
}
randomNumbersTarget.innerText = randomNumbers.join(' ');
console.log('Numbers to guess: ' + randomNumbers);

// Creo il countdown
let counter = 30;
const interval = setInterval(() => {
    if(counter === 0){
        clearInterval(interval);
        randomNumbersContainer.classList.add('d-none');
        form.classList.remove('d-none');
    } else {
        cd.innerText = --counter;
    }

    // Cambio il colore in base al tempo che resta
    if(counter <= 30 && counter > 20){
        cd.classList.add('text-success');
    } else if(counter <= 20 && counter > 10) {
        cd.classList.add('text-warning');
    } else {
        cd.classList.add('text-danger');
    }
}, 1000);

// Azioni al click del bottone
button.addEventListener('click', () => {
    // Prendo i valori inseriti dall'utente e li salvo
    const userGuesses = [];
    for(let i = 0; i < userInput.length; i++) userGuesses.push(parseInt(userInput[i].value));
    console.log('User guesses: ' + userGuesses);
    // Verifico i valori inseriti
    for(let i = 0; i < userGuesses.length; i++){
        if(randomNumbers.includes(userGuesses[i]) && !correctNumbers.includes(userGuesses[i])){
            correctNumbers.push(userGuesses[i]);
        };
    }
    // Controllo il risultato e lo stampo in pagina
    console.log('User correct guesses: ' + correctNumbers);
    let message;
    if(!correctNumbers.length){
        message = 'Hai perso D: Non hai indovinato nessun numero';
    } else if(correctNumbers.length === randomNumbers.length) {
        message = 'Hai indovinato tutti i numeri, grande! :D'
    } else {
        message = `Ottimo lavoro! Hai indovinato ${correctNumbers.length} numero/i: ${correctNumbers}`
    }

    resultTarget.innerText = message;

    // Rimuovo il form
    form.classList.add('d-none');

    // Mostro il risultato
    resultsBox.classList.remove('d-none');
});

