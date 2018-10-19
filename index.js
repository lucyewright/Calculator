import { getResult } from "./src/equalsClick";

let displayNum = "";
let storeNum1 = "";
let storeOperator = "";
let storeNum2 = "";
let decimal = "";

let display = document.getElementById("display");
let answer = document.getElementById("answer");

const clearDisplay = arg => {
  displayNum = "";
  storeNum1 = "";
  storeNum2 = "";
  decimal = "";
  storeOperator = "";
  display.innerHTML = displayNum;
  answer.innerHTML = "";
};
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);

const numClick = e => {
  displayNum += e.target.value;
  if (storeOperator === "") {
    storeNum1 += e.target.value;
  } else if (storeOperator) {
    storeNum2 += e.target.value;
  }
  display.innerHTML = displayNum;
  answer.innerHTML = "";
};
let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  console.log(numButtons[i]);
  numButtons[i].addEventListener("click", numClick);
}

const decimalClick = e => {
  (storeOperator === "") ? 
    (if (displayNum === "") {
      storeNum1 += 0;
      storeNum1 += e.target.value;
      displayNum += 0;
      displayNum += e.target.value;
    } else if (decimal === "") {
      storeNum1 += e.target.value;
      decimal += e.target.value;
      displayNum += decimal;
    } else if (decimal.length > 0) {
      return;
    } ) :
    (if (displayNum === "") {
      storeNum2 += 0;
      storeNum2 += e.target.value;
      displayNum += 0;
      displayNum += e.target.value;
    } else if (decimal === "") {
      storeNum2 += e.target.value;
      decimal += e.target.value;
      displayNum += decimal;
    } else if (decimal.length > 0) {
      return;
    })
  }

  display.innerHTML = displayNum;
  answer.innerHTML = "";
};
let pointButton = document.getElementById("point");
pointButton.addEventListener("click", decimalClick);

const operatorClick = e => {
  displayNum = "";
  storeOperator += e.target.value;
  display.innerHTML = displayNum;
};
let operatorButtons = document.getElementsByClassName("action");
for (let i = 0; i < operatorButtons.length; i++) {
  console.log(operatorButtons[i]);
  operatorButtons[i].addEventListener("click", operatorClick);
}

const equalsClick = arg => {
  const result = getResult(storeNum1, storeOperator, storeNum2);
  answer.innerHTML = result;
  displayNum = "";
  storeNum1 = "";
  storeOperator = "";
  storeNum2 = "";
};

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", equalsClick);
