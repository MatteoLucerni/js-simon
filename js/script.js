console.log('JS OK');

// Preliminari
const cd = document.getElementById('cd');
const randomNumbersTarget = document.getElementById('random-numbers');
const randomNumbersContainer = document.getElementById('random-container');
const correctNumbersTarget = document.getElementById('correct-number');
const resultTarget = document.getElementById('result');
const resultsBox = document.getElementById('results-box');
const userInput = document.querySelectorAll('input');
const form = document.getElementById('form');
const button = document.getElementById('guess-button');
const correctNumbers = [];

// Funzioni
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// Genero 5 numeri casuali diversi
const randomNumbers = [];
while(randomNumbers.length < 5) {
    let number = getRandomNumber(1,100);
    if(randomNumbers.includes(number)){
        number = getRandomNumber(1,100);
    } else {
        randomNumbers.push(number);
    }
}
randomNumbersTarget.innerText = randomNumbers;
console.log(randomNumbers);

// Creo il countdown
let counter = 5;
const interval = setInterval(() => {
    if(counter === 0){
        clearInterval(interval);
        randomNumbersContainer.classList.add('d-none');
        form.classList.remove('d-none');
    } else {
        cd.innerText = --counter;
    }
}, 500);

