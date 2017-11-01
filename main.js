var Word = require("./word.js");
var Letter = require("./letter.js");
var gameExp = require("./game.js");
var Game = gameExp.Game
var gameWord = gameExp.gameWord
var inquirer = require("inquirer");
var guess = gameExp.guess;
//var uarray = [];
//var guess;

var currentGame = new Game()
var gameWord = currentGame.pickCurrentWrd();
currentGame.updateWords();
//console.log(gameWord)
var curGameWord = new Word(gameWord);
//console.log(curGameWord)
curGameWord.lettersObjects();


console.log("\nPick a letter to start the game.\nYou can only pick one at a time. \nThe theme is Disney Songs! :) \nHave Fun!\n")
curGameWord.displayWord();
console.log("\n Guesses left: " + curGameWord.guesses +"\n")
console.log(gameExp)
currentGame.UserInput(curGameWord);

console.log(gameExp)


module.exports = {
	curGameWord: curGameWord,
	currentGame:currentGame
}
