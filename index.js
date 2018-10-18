import { getResult } from "./src/equalsClick";

let displayNum = "";
let storeNum1 = "";
let storeOperator = "";
let storeNum2 = "";

let display = document.getElementById("display");
let answer = document.getElementById("answer");

const clearDisplay = arg => {
  displayNum = "";
  storeNum1 = "";
  storeNum2 = "";
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

const decimalClick = arg => {};

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
