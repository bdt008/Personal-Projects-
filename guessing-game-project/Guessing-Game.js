const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




const askGuess = () => {
    rl.question("Enter Guess:", (answer) => {
        
    })
}

let secretNumber = 5;

function checkGuess(number) {
    if(number > secretNumber) {
        console.log('Too high.')
        return false
    } else if (number < secretNumber) {
        console.log('Too low.')
        return false
    } else if (number === secretNumber) {
        console.log('Correct!')
        return true
    }
}
