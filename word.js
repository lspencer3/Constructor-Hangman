
var Letter = require("./letter.js");

var wordLetters =[ ];
var ungameWordArray = [];
var guessedWrong=[];

var Word = function Word(wordarrayparam){
	this.wordarray = wordarrayparam;
	this.lettersObjects = function(){
		var WA = this.wordarray
		for (var i = 0 ; i < WA.length; i++){
			  wordLetters.push(new Letter(WA[i]));
		}
		console.log(wordLetters)
	};
	this.displayWord = function(){
		for (var i = 0 ; i < wordarrayparam.length; i++){
			var un = "_";
			ungameWordArray.push(un)
		}
		console.log(ungameWordArray)
	}
	this.redisplayWord = function(){
		if (letter.guessed === true){
			for(var i = 0; i < curgameWord.wordarray.length; i++){
				if(letter.letter = curgameWord.wordarray[i]){
					ungameWordArray[i]=letter.letter
				}
			}
		}
	}
};

module.exports = Word

