const calcDisplay = document.getElementById("calcDisplay");

const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const multiply = document.getElementById("multiply");

const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const minus = document.getElementById("minus");

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const plus = document.getElementById("plus");

const number0 = document.getElementById("number0");
const comma = document.getElementById("comma");
const equal = document.getElementById("equal");
const divide = document.getElementById("divide");


let myCurrentNumber = [];

let myPreviousNumber = [];

let chosenManipulation;

let result;

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

multiply.addEventListener("click", function () {

    if (myPreviousNumber.length === 0) {

        chosenManipulation = "*"

        myPreviousNumber = myCurrentNumber;

        myCurrentNumber = [];

        calcDisplay.innerText = "*";

    } else {
        alert("kan bara räkna 2 siffror åt gången");
    }

});

minus.addEventListener("click", function () {

    if (myPreviousNumber.length === 0) {

        chosenManipulation = "-"

        myPreviousNumber = myCurrentNumber;

        myCurrentNumber = [];

        calcDisplay.innerText = "-";

    } else {
        alert("kan bara räkna 2 siffror åt gången");
    }

});

plus.addEventListener("click", function () {

    if (myPreviousNumber.length === 0) {

        chosenManipulation = "+"

        myPreviousNumber = myCurrentNumber;

        myCurrentNumber = [];

        calcDisplay.innerText = "+";

    } else {
        alert("kan bara räkna 2 siffror åt gången");
    }

});

ac.addEventListener("click", function () {

    result = "";

    myCurrentNumber = [];

    myPreviousNumber = [];

    chosenManipulation = "";

    calcDisplay.innerText = "";


});

comma.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }


    myCurrentNumber.push(".");

    calcDisplay.innerText += ".";


});

equal.addEventListener("click", function () {

    if (myPreviousNumber.length > 0) {

        calculateSum(myPreviousNumber, chosenManipulation, myCurrentNumber);

    } else {

        calcDisplay.innerText = "du har bara matat in 1 siffra";

    }

});

divide.addEventListener("click", function () {

    if (myPreviousNumber.length === 0) {

        chosenManipulation = "/"

        myPreviousNumber = myCurrentNumber;

        myCurrentNumber = [];

        calcDisplay.innerText = "/";

    } else {
        alert("kan bara räkna 2 siffror åt gången");
    }

});

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

number7.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }


    myCurrentNumber.push(7);

    calcDisplay.innerText += 7;

});

number8.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(8);

    calcDisplay.innerText += 8;

});

number9.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(9);

    calcDisplay.innerText += 9;

});




number4.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(4);

    calcDisplay.innerText += 4;

});

number5.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(5);

    calcDisplay.innerText += 5;

});

number6.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(6);

    calcDisplay.innerText += 6;

});



number1.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(1);

    calcDisplay.innerText += 1;

});

number2.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(2);

    calcDisplay.innerText += 2;

});

number3.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(3);

    calcDisplay.innerText += 3;

});

number0.addEventListener("click", function () {

    if (result) {

        calcDisplay.innerText = "";
        result = "";

    }

    myCurrentNumber.push(0);

    calcDisplay.innerText += 0;

});


// funktion som kallaa när man trycker på likamed, då räknas allt ihop

function calculateSum(firstnumber, manipulation, secondnumber) {

    let firstNumberToCalculate = "";
    let secondNumberToCalculate = "";


    for (let i = 0; i < firstnumber.length; i++) {
        const number = firstnumber[i];


        firstNumberToCalculate += number;


    }

    for (let i = 0; i < secondnumber.length; i++) {
        const number = secondnumber[i];


        secondNumberToCalculate += number;


    }

    if (manipulation === "*") {

        result = Number(firstNumberToCalculate) * Number(secondNumberToCalculate);


    }

    if (manipulation === "/") {

        result = Number(firstNumberToCalculate) / Number(secondNumberToCalculate);

    }

    if (manipulation === "+") {

        result = Number(firstNumberToCalculate) + Number(secondNumberToCalculate);

    }

    if (manipulation === "-") {

        result = Number(firstNumberToCalculate) - Number(secondNumberToCalculate);

    }

    calcDisplay.innerText = result;
    
    myCurrentNumber = [];

    myPreviousNumber = [];

};




