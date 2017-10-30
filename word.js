
var Letter = require("./letter.js");

var guessedWrong=[];

var Word = function Word(wordarrayparam){
	this.wordArray = wordarrayparam;
	this.wordLetters =[];
	this.uarray =[];
	this.guessed = 0;
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
				this.guessed ++
			}
			else{
				this.uarray.push("_")
			}
		}
		console.log(this.uarray.join(" ") + "\n")
	};
	this.newWordCheck = function(){
		if (this.guessed === this.wordArray.length){
			this.wordWon = true
		}
	};
	this.redisplayWord = function(){
		if (letter.guessed === true){
			for(var i = 0; i < curgameWord.wordArray.length; i++){
				if(letter.letter = curgameWord.wordArray[i]){
					ungameWordArray[i]=letter.letter
				}
			}
		}
	}
};

module.exports = Word

