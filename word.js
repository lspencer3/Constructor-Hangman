
var Letter = require("./letter.js");

var guessedWrong=[];

var Word = function Word(wordarrayparam){
	this.wordArray = wordarrayparam;
	this.wordLetters =[];
	this.uarray =[];
	this.guessedWCounter = 0;
	this.guessedltrs=[];
	this.guesses = 10;
	this.choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	/*this.updateChoices = function(){
		this.choices.splice(this.choices.indexOf(guess), 1);
	};*/
	this.wordWon = false;
	this.lettersObjects = function(){
		for (var i = 0 ; i < this.wordArray.length; i++){
			  this.wordLetters.push(new Letter(this.wordArray[i]));
		}
		//console.log(wordLetters)
	};
	this.displayWord = function(){
		for (var i = 0; i < this.wordArray.length; i++){
			if(this.wordArray[i]===" "){
				this.uarray.push(" ")
				this.guessedWCounter ++
			}
			else{
				this.uarray.push("_")
			}
		}
		console.log(this.uarray.join(" ") + "\n")
	};
	this.newWordCheck = function(){
		if (this.guessedWCounter === this.wordArray.length){
			this.wordWon = true
		}
	}
};

module.exports = Word

