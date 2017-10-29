
var Letter = require("./letter.js");

var guessedWrong=[];

var Word = function Word(wordarrayparam){
	this.wordArray = wordarrayparam;
	this.wordLetters =[];
	this.lettersObjects = function(){
		var WA = this.wordArray
		for (var i = 0 ; i < WA.length; i++){
			  this.wordLetters.push(new Letter(WA[i]));
		}
		//console.log(wordLetters)
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

