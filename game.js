var Word = require("./word.js");
var Letter = require("./letter.js");
//var uarray = [];
var inquirer = require("inquirer");
var main = require("./main.js")
var guess;
var gameWord;
var curGameWord = main.wordObj
var currentGame = main.currentGame
//var wordObj = main.wordObj
//console.log(wordObj)


/*
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
//var songs = [words.word1, words.word2, words.word3, words.word4, words.word5, words.word6, words.word7, words.word8, words.word9, words.word10];

var songs =[words.word5,words.word7]
//console.log(songs.length)

function pickWord(){
	gameWord = songs[Math.floor(Math.random()*songs.length)];
	songs.splice(songs.indexOf(gameWord), 1);
}

//start the game by picking a random word from the songs array
pickWord();
//display word picked
//console.log(gameWord)
var wordObj = new Word(gameWord);
//console.log(wordObj)
console.log("\nPick a letter to start the game.\nYou can only pick one at a time. \nThe theme is Disney Songs! :) \nHave Fun!")
//console.log(wordObj.wordArray)
wordObj.lettersObjects();
//console.log(wordObj.wordLetters)
wordObj.displayWord();
console.log("\n Guesses left: " + wordObj.guesses +"\n")
UserInput();
*/



function Game(){
	this.words = { 
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
	};
	this.songsArr = [this.words.word1, this.words.word2, this.words.word3, this.words.word4, this.words.word5, this.words.word6, this.words.word7, this.words.word8, this.words.word9, this.words.word10];
	this.pickCurrentWrd = function(){
		return this.songsArr[Math.floor(Math.random()*this.songsArr.length)]
	};
	this.updateWords = function(){
		this.songsArr.splice(this.songsArr.indexOf(this.pickCurrentWrd), 1)
	};
	this.checkMaxGuesses = function(wordObj){
		if (wordObj.guesses === 0){
			inquirer.prompt([
	    	{
		        name: "newGame2",
		        message: "\n Aw!! You ran out of guesses! Play Again? \n",
		        type: "confirm"
	      	}
		    ]).then(function(res){
		    		//console.log(res)
		    		if(res.newGame2 === true|| res.newGame2 === "yes"){
		    			//songs = [words.word1, words.word2, words.word3, words.word4, words.word5, words.word6, words.word7, words.word8, words.word9, words.word10];
						currentGame = new Game()
						gameWord = currentGame.pickCurrentWrd;
						currentGame.updateWords();
						wordObj = new Word(gameWord);
						console.log(wordObj.wordArray)
						wordObj.lettersObjects();
						console.log("\n New Word! \n")
						wordObj.displayWord();
						console.log("\n Guesses left: " + wordObj.guesses +"\n")
						currentGame.UserInput();
		    		}
	    			else{
	    				console.log("\n Thanks for playing!! :) \n")
	    			}
	    		})
		}
		else if (wordObj.guesses > 0){
			wordObj.guessedltrs.push(wordObj.guessedltrs)
	    	console.log("\n"+ wordObj.uarray.join(" ")+"\n")
	    	console.log("\n Letters already guessed: "+ wordObj.guessedltrs.join(" ")+"\n")
	    	console.log("\n Guesses left: " + wordObj.guesses +"\n")
	    	wordObj.newWordCheck();
	    	//console.log(wordObj.wordWon)
	    	UserInput(wordObj);
		}
	};
	this.gamePlayed = function(){
		if (songs.length === 0){
			inquirer.prompt([
		      {
		        name: "newGame",
		        message: "\n Awesome! You guessed all the Disney Songs! Play Again? \n",
		        type: "confirm"
		      }
		    ]).then(function(res){
		    		//console.log(res)
		    		if(res.newGame === true|| res.newGame === "yes"){
		    			currentGame = new Game()
						gameWord = currentGame.pickCurrentWrd;
						currentGame.updateWords();
						wordObj = new Word(gameWord);
						console.log(wordObj.wordArray)
						wordObj.lettersObjects();
						console.log("\n New Word! \n")
						wordObj.displayWord();
						console.log("\n Guesses left: " + wordObj.guesses +"\n")
						UserInput(wordObj);
		    		}
		    		else{
		    			console.log("\n Thanks for playing!! :) \n")
		    		}
		    	})
		}
		else{
			currentGame = new Game()
			gameWord = currentGame.pickCurrentWrd;
			currentGame.updateWords();
			wordObj = new Word(gameWord);
			console.log(wordObj.wordArray)
			wordObj.lettersObjects();
			console.log("\n New Word! \n")
			wordObj.displayWord();
			console.log("\n Guesses left: " + wordObj.guesses + "\n")
			UserInput(wordObj);
		}
		//console.log("song check came back true")
	};
	this.UserInput = function(wordObj){
		if (wordObj.wordWon === false){
			inquirer.prompt([
		      {
		        name: "guess",
		        message: "Guess a letter.",
		        choices: wordObj.choices,
		        type:"checkbox"
		      }
		    ]).then(function(ans){
		      //guess = ans.ans.guess[0][0]
		     //console.log(ans.guess[0])
		     //remove guessed letter from available user options
		     //wordObj.updateChoices()
			    if(wordObj.wordArray.indexOf(ans.guess[0])>=0){
				    for (var i = 0; i < wordObj.wordLetters.length; i++){
				     	if (ans.guess[0] === wordObj.wordLetters[i].ltr){
				     		wordObj.uarray[i] = ans.guess[0]
				     		wordObj.guessedWCounter ++
				     		//console.log(wordObj.guessed)
				     		//console.log(wordObj.uarray.length)
				     	}

				    }
				wordObj.newWordCheck();
				wordObj.guessedltrs.push(ans.guess[0])
			    console.log("\n"+ wordObj.uarray.join(" ")+"\n")
			    console.log("\n Letters already guessed: "+ wordObj.guessedltrs.join(" ")+"\n")
			    console.log("\n Guesses left: " + wordObj.guesses +"\n")
			    //console.log(wordObj.guessedWCounter)
			    //console.log(wordObj.wordWon)
			    this.UserInput(wordObj)
			 	}
			    else{	
			     		//console.log(wordObj.guesses)
			     		console.log("\nSorry that letter is not in the song")
			     		wordObj.guesses -- 
			     		this.checkMaxGuesses(wordObj);
			     		//console.log(wordObj.guesses)
			    }
		    });
		}
		else if (wordObj.wordWon === true){
			//console.log(songs.length)
			currentGame.gamePlayed();
		}
	};
}

module.exports = {
	Game: Game,
	gameWord: gameWord,
	guess:guess
}



