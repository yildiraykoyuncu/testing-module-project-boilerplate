//counts the number attempts to calculate score
let attempts = 0;

//score

let score = 0;

//Displays the score
let scoreDisplay = document.querySelector('#score')
scoreDisplay.innerHTML = 'Your score is:'


//Displays the message

let messageDisplay = document.querySelector('#message')
messageDisplay.innerHTML = 'Enter a number and click guess button'


//Random number

let compNumber = 0
localStorage.setItem('compNumber', compNumber)
console.log(localStorage.getItem('compNumber'))


//generates a random number within a range.
const randomNumberGenerator = (start, end) => {
    return Math.floor((Math.random() * (end - start)) + start);

};

//calculates the final score depending on number of failed attempts;

const scoreCalculator = (attempts) => {

    score = (100 - (attempts * 10));

    if (score <= 0) {
        scoreDisplay.innerHTML = 'Your score is 0'
    } else {
        scoreDisplay.innerHTML = `Your score is ${score}`
    }

}


//checks if users guess is equals to randomly generate number; 
const NumberChecker = (guess, compNumber) => {
    if (guess === compNumber) {
        messageDisplay.innerHTML = 'Correct! Congratulations!'
        scoreCalculator(attempts)
        return;
    } else {
        messageDisplay.innerHTML = 'Nope! Try Again!'
        attempts += 1;

    };
}





//handler functions starts the sequence after button click and calls the functions in a order.
const settingsHandler = () => {

    //resets number of attempts at the beginning of the game.
    attempts = 0;

    //resets the score
    scoreDisplay.innerHTML = 'Your score is:'

    //resets the message
    messageDisplay.innerHTML = 'Enter a number and click guess button'

    let start = document.querySelector('#start').value;
    if (start === null) { return };

    let end = document.querySelector('#end').value;
    if (end === null) { return };

    let startingNumber = Number(start)

    let endingNumber = Number(end)

    compNumber = randomNumberGenerator(startingNumber, endingNumber);
    console.log(compNumber)
    console.log(localStorage.getItem('compNumber'))

}

const numberGameHandler = () => {
    let userNumber = document.querySelector('#guess').value;
    if (userNumber === null) { return };

    let guess = Number(userNumber)

    NumberChecker(guess, compNumber);


}
let random = randomNumberGenerator(40, 50)