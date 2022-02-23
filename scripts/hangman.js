const getRandomInt = Math.floor(Math.random() * 100 + 1); 
console.log( "For my Presentation: " + getRandomInt);

const textBox = document.getElementById('msgTextBox')

const guess = document.getElementById("guessedNumber");

const startBtn = document.getElementById("startGuess");
startBtn.addEventListener("click", guessGeneratedInt);


const restartBtn = document.getElementById("restartButton");
restartBtn.addEventListener("click", restartGame);

let numberOfGuesses = 0;

function guessGeneratedInt(){
   
    let input = parseInt(guess.value);
    
    if (input > 0 && input <= 100) {
        numberOfGuesses++;

        if (input === getRandomInt){
            textBox.setAttribute("class", "green");
            textBox.innerText = `CORRECT: Your guess was right! \n \n Number of Guesses: ${numberOfGuesses}`;
            startBtn.disabled = true;
            startBtn.setAttribute("id", "defaultBut");
        }else if (getRandomInt > input) {
            if ((getRandomInt - input) < 10) {
                textBox.setAttribute("class", "red");
                textBox.innerText = `HOT: Your guess is too high \n \n You have had ${numberOfGuesses} guesses  \n \n Please guess again`;
            } else if ((getRandomInt - input) < 30) {
                textBox.setAttribute("class", "white");
                textBox.innerText = `WHITE: Your guess is within 30 \n \n You have had ${numberOfGuesses} guesses  \n \n Please guess again`;
            } else {
                textBox.setAttribute("class", "blue");
                textBox.innerText = `Your guess is too cold \n \n  You have had ${numberOfGuesses} guesses  \n \n Please guess again`;
            }

        } else {
            if ((input - getRandomInt) < 10) {
                textBox.setAttribute("class", "red");
                textBox.innerText = `HOT: Your guess is too high \n\n You have had ${numberOfGuesses} guesses  \n \n Please guess again`;
            } else if ((input - getRandomInt) < 30) {
                textBox.setAttribute("class", "white");
                textBox.innerText = `WHITE: Your guess is within 30 \n\n You have had ${numberOfGuesses} guesses  \n \n Please guess again`;
            } else {
                textBox.setAttribute("class", "blue");
                textBox.innerText = `COLD: Your guess is too cold \n\n You have had ${numberOfGuesses} guesses  \n \n Please guess again`;

            }

        }
    }else{ //invalid entries
        textBox.setAttribute("class", "brown");
        textBox.innerHTML = `INVALID ENTRY:  \n\n Please enter a number between 1 and 100`
    }


}



function restartGame(){
    numberOfGuesses = 0;
    textBox.setAttribute("class", "");
    textBox.innerHTML = "";
    startBtn.disabled = false;
    window.location.reload();
    console.log( Math.floor(Math.random() * 100 + 1));
}




