var songTitle = document.getElementById("song-title");
var wins = document.getElementById("wins");
var word = document.getElementById("word");
var remainingChances = document.getElementById("chances");
var letters = document.getElementById("letters");
var placeholder = [];
var incorrectLettersArray = [];
var correctChoicesArray=[];
var gameOver = false;
var list = ["beat it", "sweet child of mine", "don't stop believ'n"];
var random = list[Math.floor(Math.random() * list.length)];
var chances = random.length + 0;


//display song title in the console
console.log(random);

// display the number of chances on the page
remainingChances.textContent = chances;

//display the random song title in the current word section as 
for (var i = 0; i<random.length;i++) {
    if(random[i]===" "){
        placeholder.push(" ");
    }else {

    placeholder.push("_");
    word.textContent = placeholder.join("");
    }
}


//trigger event function on key press
document.onkeydown = function(event) {
    // declare variable for event key
    var key = event.key;
    
    //verify whether or not the letter exists in the string random, if not then add it to letters array AND verify if the letter already exists in the correctChoicesArray
    if(!(random.indexOf(key) === -1) &&
        (correctChoicesArray.indexOf(key)===-1) &&
        !gameOver){
        // user chose letter that is in the random song string. insert that letter into the string at the appropriate indices 
        var indexes = [];
        for(i=0; i < random.length ; i++) {
            if(key ===random[i]) {
                indexes.push(i);
            }
        
        }
        for(i=0; i < indexes.length ; i++) {
            placeholder.splice(indexes[i],0,key);
            placeholder.splice(indexes[i]+1, 1);
        }

        
        //if player wins then 1. songtitle changes to white. 2. respective song image displays 3. new song title is chosen 4. new song title is displayed in hangman format i.e. _ _ _ _ 5. chances reset 6. chosen letters resets. 
        
        /////////////////////////
        if(random===placeholder){
            songTitle.style.color = "white";

        }
        ////////////////////////

        // Display the correctly chosen letter on the page
        word.textContent = placeholder.join("");
        console.log("indices of " + key  + ": " + indexes);
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
 //end of keydown function
};    



////////////////////////

//find indicies of single or repeated keys in a string
    // function findIndexes(str) {
    //     var indexes = [];
    //     for(i=0; i < str.length ; i++) {
    //         if(key ===str[i]) {
    //             indexes.push(i);
    //         }
    //         console.log("indices of key value " + indexes);
        
    //     }
    //     for(i=0; i < indexes.length ; i++) {
    //         placeholder.splice(indexes[i],0,key);
    //     }
    // }
  /////////////////////

 //refactor
//function to generate pick song at random
// function randomSong() {
//     //choose random song from list array on refresh or when player wins
// }
       
    

    // end of game
    // else if (chances===0){
    //     gameOver = true;
    //     word.textContent = "GAME OVER";

    // }


 

  