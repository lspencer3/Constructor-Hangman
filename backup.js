var Word = require("./word.js");
var Letter = require("./letter.js");
var uarray = [];
var inquirer = require("inquirer");
var guess;
//console.log(Word)
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
//SWITCH TO THE BELLOW ARRAY TO TEST WITH TWO SONGS
//var songs =[words.word5,words.word7]
//console.log(songs.length)

var userOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


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
console.log("\nPick a letter to start the game.\nYou can only pick one at a time. \nThe theme is Disney Songs! :) \nHave Fun!")
//console.log(curGameWord.wordArray)
curGameWord.lettersObjects();
//console.log(curGameWord.wordLetters)
curGameWord.displayWord();
console.log("\n Guesses left: " + curGameWord.guesses +"\n")
UserInput();

function UserInput(){
	if (curGameWord.wordWon === false){
		inquirer.prompt([
	      {
	        name: "guess",
	        message: "Guess a letter.",
	        choices: curGameWord.choices,
	        type:"checkbox"
	      }
	    ]).then(function(ans) {
	     guess = ans.guess[0]
	     //console.log(guess)
	     //remove guessed letter from available user options
	     //curGameWord.UpdateChoices
		     if(curGameWord.wordArray.indexOf(guess)>=0){
			     for (var i = 0; i < curGameWord.wordLetters.length; i++){
			     	if (guess === curGameWord.wordLetters[i].ltr){
			     		curGameWord.uarray[i] = guess
			     		curGameWord.guessedWCounter ++
			     		//console.log(curGameWord.guessed)
			     		//console.log(curGameWord.uarray.length)
			     	}

			    }
			curGameWord.newWordCheck();
			curGameWord.guessedltrs.push(guess)
		    console.log("\n"+ curGameWord.uarray.join(" ")+"\n")
		    console.log("\n Letters already guessed: "+ curGameWord.guessedltrs.join(" ")+"\n")
		    console.log("\n Guesses left: " + curGameWord.guesses +"\n")
		    //console.log(curGameWord.guessedWCounter)
		    //console.log(curGameWord.wordWon)
		    UserInput()
		 	}
		    else {	
		     		//console.log(curGameWord.guesses)
		     		console.log("\nSorry that letter is not in the song")
		     		curGameWord.guesses -- 
		     		checkMaxGuesses();
		     		//console.log(curGameWord.guesses)
		     }
	    });
	}
	else if (curGameWord.wordWon === true){
		//console.log(songs.length)
		gamePlayed();
	}
}


function gamePlayed(){
	if (songs.length === 0){
		inquirer.prompt([
	      {
	        name: "newGame",
	        message: "\n Awesome! You guessed all the Disney Songs! Play Again? \n",
	        type: "confirm"
	      }
	    ]).then(function(res){
	    		//console.log(res)
	    		if(res.newGame === true|| res.newGame === "Yes"){
	    			songs = [words.word1, words.word2, words.word3, words.word4, words.word5, words.word6, words.word7, words.word8, words.word9, words.word10];
					//songs =[words.word5, words.word7]
					pickWord();
					curGameWord = new Word(gameWord);
					//console.log(curGameWord.wordArray)
					curGameWord.lettersObjects();
					console.log("\n New Word! \n")
					curGameWord.displayWord();
					console.log("\n Guesses left: " + curGameWord.guesses +"\n")
					UserInput();
	    		}
	    		else{
	    			console.log("\n Thanks for playing!! :) \n")
	    		}
	    })
	}
	else{
		pickWord();
		curGameWord = new Word(gameWord);
		//console.log(curGameWord.wordArray)
		curGameWord.lettersObjects();
		console.log("\n New Word! \n")
		curGameWord.displayWord();
		console.log("\n Guesses left: " + curGameWord.guesses +"\n")
		UserInput();
	}
	//console.log("song check came back true")
}

function checkMaxGuesses(){
	if (curGameWord.guesses === 0){
		inquirer.prompt([
	      {
	        name: "newGame2",
	        message: "\n Aw!! You ran out of guesses! Play Again? \n",
	        type: "confirm"
	      }
	    ]).then(function(res){
	    		//console.log(res)
	    		if(res.newGame2 === true|| res.newGame2 === "Yes"){
	    			songs = [words.word1, words.word2, words.word3, words.word4, words.word5, words.word6, words.word7, words.word8, words.word9, words.word10];
					//songs =[words.word5,words.word7]
					pickWord();
					curGameWord = new Word(gameWord);
					//console.log(curGameWord.wordArray)
					curGameWord.lettersObjects();
					console.log("\n New Word! \n")
					curGameWord.displayWord();
					console.log("\n Guesses left: " + curGameWord.guesses +"\n")
					UserInput();
	    		}
	    		else{
	    			console.log("\n Thanks for playing!! :) \n")
	    		}
	    })
	}
	else if (curGameWord.guesses > 0){
		curGameWord.guessedltrs.push(guess)
	    console.log("\n"+ curGameWord.uarray.join(" ")+"\n")
	    console.log("\n Letters already guessed: "+ curGameWord.guessedltrs.join(" ")+"\n")
	    console.log("\n Guesses left: " + curGameWord.guesses +"\n")
	    curGameWord.newWordCheck();
	    //console.log(curGameWord.wordWon)
	    UserInput();
	}
}


//create game contructor with this.choices




