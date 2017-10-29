var Word = require("./word.js");
var Letter = require("./letter.js");
var uarray = [];
var inquirer = require("inquirer");
var guess;
console.log(Word)
var words = {
	word1: ["h","a","k","u","n", "a"," ", "m", "a", "t","a","t", "a"],
	word2: ["a", " ", "w", "h", "o", "l","e", " ", "n", "e", "w", " ", "w", "o", "r", "l", "d"],
	word3: ["u", "n", "d", "e", "r", " ", "t", "h", "e", " ", "s", "e", "a"],
	word4: ["c", "o", "l", "o", "r", "s", " ", "o", "f", " ", "t", "h", "e"," ", "w", "i", "n", "d"],
	word5: ["l", "e", "t", " ", "i", "t", " ", "g", "o"],
	word6: ["i", " ", "j", "u", "s", "t", " ", "c", "a", "n", "t", " ", "w","a", "i", "t", " ", "t" , "o", " ", "b", "e", " ", "k", "i", "n", "g"],
	word7: ["r", "e", "f", "l", "e", "c", "t", "i", "o", "n"],
	word8: ["j", "u", "s", "t", " ", "a", "r", "o", "u", "n", "d", " ", "t","h", "e", " ", "r", "i" , "v", "e", "r", "b", "e", "n", "d"],
	word9: ["y", "o", "u", "l", "l", " ", "b", "e", " ", "i", "n", " ", "m","y", " ", "h", "e", "a" , "r", "t"],
	word10:["c", "a", "n", " ", "y", "o", "u", " ", "f", "e", "e", "l", " ","t", "h", "e", " ", "l" , "o", "v","e", " ", "t", "o","n","i", "g","h","t"]
}
var gameWord;
var songs = [words.word1, words.word2, words.word3, words.word4, words.word5, words.word6, words.word7, words.word8, words.word9, words.word10];

//console.log(songs.length)

function pickWord(){
	gameWord = songs[Math.floor(Math.random()*songs.length)];
	songs.splice(songs.indexOf(gameWord), 1);
}

//start the game by picking a random word from the songs array
pickWord();
//display word picked
//console.log(gameWord)
var curGameWord = new Word(gameWord);
//console.log(curGameWord)
console.log(curGameWord.wordArray)
curGameWord.lettersObjects();
console.log(curGameWord.wordLetters)
displayWord(curGameWord.wordArray);
//curGameWord.displayWord(curGameWord);


function displayWord(wordarrayparam){
	for (var i = 0; i < wordarrayparam.length; i++){
		if(wordarrayparam[i]===" "){
			uarray.push(" ")
		}
		else{
			uarray.push("_")
		}
	}
	console.log(uarray.join(" ") + "\n")
	UserInput()
}


function UserInput(){
inquirer.prompt([
      {
        name: "guess",
        message: "Guess a letter.",
        choices: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
        type:"checkbox"
      }
    ]).then(function(ans) {
     guess = ans.guess
     console.log(guess)
     for (var i = 0; i < curGameWord.wordLetters.length; i++){
     	if (guess === curGameWord.wordLetters[i].ltr){
     		uarray[i] = guess
     	}
     }
     console.log(uarray.join(" ") + "\n")
     UserInput()
    });

}




