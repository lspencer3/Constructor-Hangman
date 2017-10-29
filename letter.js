//creat a letter constructor that takes in the letters guessed and pushes them to an array of things guess and displays to console if correct function Word(wordparam, letterparam){
var guessedLetters =[];

var Letter = function Letter(letterparam1){
	this.ltr = letterparam1;
	this.guessed = false;
	this.guessfunc = function(){
		if (process.argv[2] === this.letter){
			this.guessed = true
			guessedLetters.push(this.letter)
		}
	};
};

module.exports = Letter

//console.log(Letter)
/*var a = new Letter("a");
console.log(a.guessed)

console.log(a.letter)
a.guessfunc();
console.log(a.guessed)*/


