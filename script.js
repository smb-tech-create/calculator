


function getFirstNumber() {
    let inputString1 = prompt("Enter the first number");
    return Number(inputString1);
}
function getSecondNumber() {
    let inputString2 = prompt("Enter the second number");
    return Number(inputString2);
}

function getUserChoice() {
    let userChoice = prompt("Enter add, subtract, multiply, or divide");
    return userChoice;    
}

function performCalc(firstNumber, secondNumber, userChoice) {
    if (userChoice == "add") {
        finalNumber = firstNumber + secondNumber;
        return finalNumber;
    } else if (userChoice == "subtract") {
        finalNumber = firstNumber - secondNumber;
        return finalNumber;
    } else if (userChoice == "multiply") {
        finalNumber = firstNumber * secondNumber;
        return finalNumber
    } else if (userChoice == "divide") {
        finalNumber = firstNumber / secondNumber;
        return finalNumber;
    }
}

function playGame() {
    const firstNumber = getFirstNumber();
    const secondNumber = getSecondNumber();
    const userChoice = getUserChoice();

    const result = performCalc(firstNumber, secondNumber, userChoice);
    console.log("The answer is " + result);
}

playGame();
