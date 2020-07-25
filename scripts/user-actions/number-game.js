//counts the number attempts to calculate score
let attempts = 0;


//generates a random number within a range.
const randomNumberGenerator = (start, end) => {
    return Math.floor((Math.random() * (end - start)) + start);

};

//checks if users guess is equals to randomly generate number; 
const NumberChecker = (guess, compNumber) => {
    if (guess === compNumber) {
        alert('Correct! Congratulations!')
        return;
    } else {
        let userInput = prompt('Nope! Try again!');
        if (userInput === null) { return };

        let userGuess = Number(userInput);

        attempts += 1;
        NumberChecker(userGuess, compNumber);
    }
};

//calculates the final score depending on number of failed attempts;

const scoreCalculator = (attempts) => {

    let score = (100 - (attempts * 10));

    if (score <= 0) {
        alert('Your score is 0')
    } else {
        alert(`Your score is ${score}`)
    }

}

//handler functions starts the sequence after button click and calls the functions in a order.
const numberGameHandler = () => {

    //resets number of attempts at the beginning of the game.
    attempts = 0;

    let start = prompt('Set a starting point');
    if (start === null) { return };

    let end = prompt('set an ending point');
    if (end === null) { return };

    let startingNumber = Number(start)

    let endingNumber = Number(end)

    let compNumber = randomNumberGenerator(startingNumber, endingNumber);

    let userNumber = prompt(`I have number in mind between ${start} and ${end}. Can you guess it?`);
    if (userNumber === null) { return };

    let guess = Number(userNumber)

    NumberChecker(guess, compNumber);

    scoreCalculator(attempts)
}

let random = randomNumberGenerator(40, 50)
console.log(random)