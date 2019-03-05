// list of variables
//=========================================================================
var songTitle = document.getElementById("song-title");
var wins = document.getElementById("wins");
var word = document.getElementById("word");
var remainingChances = document.getElementById("chances");
var letters = document.getElementById("letters");
var image = document.getElementById("image");
var placeholder = [];
var incorrectLettersArray = [];
var correctChoicesArray=[];
var score = 0;
var gameOver = false;
var list = ["beat it", "sweet child of mine", "don't stop believ'n"];
var random = obj[Math.floor(Math.random() * obj.length)].title;
var chances = random.length + 0;

// ======================================================================================

var obj = [
    {title:"beat it",
    imgHTML:'<img src="assets/images/beat-it.jpg" alt="hang man">'
    },
    {
    title: "sweet child of mine",
    imgHTML:'<img src="assets/images/sweetchildofmine.jpg" alt="sweet child of mine">'
    },
    {
    title: "don't stop believ'n",
    imgHTML: '<img src="assets/images/dontstopbelieving.jpg" alt="dont stop believing">'
    },
    ];




//function to choose random song title
function randomSong(){
    //display the random song title in the current word section as 
    for (var i = 0; i<random.length;i++) {
        if(random[i]===" "){
            placeholder.push(" ");
        }else if(random[i] === "'") {
            placeholder.push("'");
        } else{
        placeholder.push("_");
        }
    }
    word.textContent = placeholder.join("");
}

//call function randomSong and console.log the song title
randomSong();

//display random song title in the console
console.log(random);


// display the number of chances on the page
remainingChances.textContent = chances;

// hide the song title at the top of the screen
songTitle.style.display = "none";
// set wins equal to zero
wins.textContent = score;


//trigger event function on key press
document.onkeydown = function(event) {
    // declare variable for event key
    var key = event.key;
    
    //verify whether or not the letter exists in the string random, if not then add it to letters array AND verify if the letter already exists in the correctChoicesArray
    if(!(random.indexOf(key) === -1) &&
        (correctChoicesArray.indexOf(key)===-1) &&
        !gameOver){
        // user chose letter that is in the random song string. insert that letter into the string at the appropriate indices 
        function correctGuess(){
            var indexes = [];
            for(i=0; i < random.length ; i++) {
                if(key === random[i]) {
                    indexes.push(i);
                }
            
            }
            for(i=0; i < indexes.length ; i++) {
                placeholder.splice(indexes[i],0,key);
                placeholder.splice(indexes[i]+1, 1);
            }   
        }

        correctGuess();

        /////////////////////

        // change image test
        // image.innerHTML = '<img src="assets/images/beat-it.jpg" alt="hang man">';


        //if player wins then... 
        function win(){
            // songtitle displays
            songTitle.style.display = "block";
            // new song title is chosen
            randomSong();
            // increase score by 1
            score++;
            //display score
            wins.textContent = score;
            // respective song image displays
            image.style.display = "none";

            // new song title is displayed in hangman format i.e. _ _ _ _
            //chances reset 
            // chosen letters resets
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
    else if (incorrectLettersArray.indexOf(key) === -1 && 
            (correctChoicesArray.indexOf(key)===-1) &&
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


 

  