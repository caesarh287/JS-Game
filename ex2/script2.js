var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

num1 = 2;
num2 = 5;

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
}
else {
    if (parseInt(num2, 10) > parseInt(num1, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    }
    else {
        console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
}

function checkNum(number) {
    //check if the number is even
    if (number % 2 == 0) {
        console.log("The number is even.");
    }
    // if the number is odd
    else {
        console.log("The number is odd.");
    }
}

console.log(checkNum(4));