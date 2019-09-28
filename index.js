var word = require('./word.js');
var inquirer = require('inquirer');

wordsArray = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
var w = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var remGuesses = 13;

var wrd = new word(w);
console.log(`${wrd.getWord()}\n\n`);
inquirer.prompt([
    {
        message: 'Guess the letter',
        name: 'letter',
        validate: function (input) {
            return input.length == 1;
        }
    }
]).then(function(l) {
    
})

