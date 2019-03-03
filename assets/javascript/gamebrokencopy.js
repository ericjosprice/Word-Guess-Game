var songTitle = document.getElementById("song-title");
var wins = document.getElementById("wins");
var word = document.getElementById("word");
var remainingChances = document.getElementById("chances");
var letters = document.getElementById("letters");
var placeholder = [];
var incorrectLettersArray = [];
var correctChoicesArray=[];
var gameOver = false;
var list = ["beat", "sweet", "believing"];
//choose random song from list array on refresh or when player wins
var random = list[Math.floor(Math.random() * list.length)];
var chances = random.length + 0;


//show the song title in the console
console.log(random);

// display the number of chances on the page
remainingChances.textContent = chances;

//display the random song title in the current word section as 
for (var i = 0; i<random.length;i++) {

placeholder.push("_");
word.textContent = placeholder.join("");
}


//trigger event function on key press
document.onkeydown = function(event) {
    // declare variable for event key
    var key = event.key;
    
    //verify whether or not the letter exists in the string random, if not then add it to letters array AND verify if the letter already exists in the correctChoicesArray
    if(!(random.indexOf(key) === -1) &&
        (correctChoicesArray.indexOf(key)===-1) &&
        !gameOver){

        // user chose letter that is in the random song string. insert that letter into the word string at the appropriate index
////////////////////////
        // determine indicie(s) for keyed letter in string random
        
            //declare new variable indicies to manipulate in the loop
        //     var indecies = [];
        // for(i=0; i<random.length; i++){
        //     if(key===random[i]){
        //         indecies.push(i);
        //     }
        // }

        // for(i=0;i<indecies;i++){
        //     if(random.indexOf)
        //     placeholder.splice(indecies[i],0,key)
        // }


///////////////////////


        //the below code works only for first index


        
        var index = random.indexOf(key);
        
        placeholder.splice(index,0, key);
        placeholder.splice(index + 1, 1);
        

        
        
        // Display the correctly chosen letter on the page
        word.textContent = placeholder.join("");
    }
       //player guesses word correctly
    // } else if (placeholder===random) {
    //     random = list[Math.floor(Math.random() * list.length)];

    //      //has the letter been incorrectly guessed previoiusly?
    //     //and has the letter already been chosen correcly?
    // }
    else if (incorrectLettersArray.indexOf(key) === -1 &&                        (correctChoicesArray.indexOf(key)===-1) &&
                !gameOver){


        // add key to letters lettersArray
        incorrectLettersArray.push("" + key);
        //update DOM to show letters that have been selected
        letters.textContent = incorrectLettersArray;

        //take one chance away and update the chance counter
        chances--;
        remainingChances.textContent = chances;

    }  
    // end of game
    // else if (chances===0){
    //     gameOver = true;
    //     word.textContent = "GAME OVER";

    // }


    //end of keydown function
  };

  