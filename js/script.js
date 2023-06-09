console.log('JS OK');

// Preliminari
const cd = document.getElementById('cd');
const randomNumbersTarget = document.getElementById('random-numbers');
const correctNumbersTarget = document.getElementById('correct-number');
const resultTarget = document.getElementById('result');
const userInput = document.querySelectorAll('input');
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
console.log(randomNumbers);

