var word = require('./word.js');
var inquirer = require('inquirer');

wordsArray = ["New York", "Chicago", "San Francisco"];
var w = wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase();
wordsArray.splice(wordsArray.indexOf(w), 1);

var remGuesses = 13;
var guessedLetters = [];
var wins = 0;
var loses = 0;

var wrd = new word(w);
console.log(`${wrd.getWord()}\n\n`);


const askForNextWord = () => {
    if (wordsArray.length > 0) {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'play',
                message: 'Play another game?'
            }
        ]).then(function (yes) {
            if (yes.play){
                w = wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase();
                wordsArray.splice(wordsArray.indexOf(w), 1);
                remGuesses = 13;
                guessedLetters = [];
                wrd = new word(w);
                console.log(`${wrd.getWord()}\n\n`);
                guessLetter();
            } else {
                endGame();
            }
        });
    } else {
        endGame();
    }
}

function endGame() {
    console.log('GAME OVER!');
    console.log(`Wins: ${wins}`);
    console.log(`Loses: ${loses}`)
}

function guessLetter() {
    if (remGuesses > 0) {
        inquirer.prompt([
            {
                message: 'Guess the letter ',
                name: 'letter',
                validate: function (input) {
                    return (!guessedLetters.includes(input) && input.length == 1);
                }
            }
        ]).then(function (l) {
            if (wrd.checkPresence(l.letter)) {
                console.log(`\nCorrect!\n`);
            } else {
                console.log(`\nIncorrect!\n`);
                remGuesses--;
                console.log(`Remained guesses: ${remGuesses}\n`)
            }
            guessedLetters.push(l.letter);
            console.log(`${wrd.getWord()}\n\n`);
            if (wrd.isFound()) {
                wins++;
                console.log('You find the word!');
                askForNextWord();
            } else {
                guessLetter();
            }
        });
    } else {
        loses++;
        askForNextWord();
    }
}


guessLetter();




