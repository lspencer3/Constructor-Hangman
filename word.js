
var letters = require("./letters.js");
console.log(letters);

var ungameWordArray = [];
var guessedWrong=[];

var Word = function (wordarrayparam){
	this.wordarray = wordarrayparam;
	this.lettersObjects = function(wordarrayparam){
		for (var i = 0 ; i < wordarrayparam.length; i++){
			  new Letter(wordarrayparam[i]);
		}
	};
	this.displayWord = function(){
		for (var i = 0 ; i < wordarrayparam.length; i++){
			var un = "_";
			ungameWordArray.push(un)
		};
	/*this.addGuessed = function(){
		guessed.push(letterparam2)	
	};*/
}

	module.exports = {
	wordConstructor:Word
}


/*if (letter.guess === true){
			for (var i =0; i < wordarrayparam.length; i ++){
				if (letterparam2 === wordarrayparam[i]){
					wordarrayparam[i] = letterparam2
				}
			}
		}
		else if (letterparam2.guess === false){
			guessedWrong.push(letterparam2)
		};*/