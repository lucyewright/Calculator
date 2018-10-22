// import { getResult } from "./src/equalsClick";

// let displayNum = "";
// let storeSum = "";
// let storeNum1 = "";
// let storeOperator = "";
// let storeNum2 = "";
// let decimal = "";

// let display = document.getElementById("display");
// let answer = document.getElementById("answer");
// let rt = document.getElementById("running");

// const clearDisplay = arg => {
//   displayNum = "";
//   storeSum = "";
//   storeNum1 = "";
//   storeNum2 = "";
//   decimal = "";
//   storeOperator = "";
//   display.innerHTML = displayNum;
//   rt.innerHTML = storeSum;
//   answer.innerHTML = "";
// };
// let clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", clearDisplay);

// const numClick = e => {
//   displayNum += e.target.value;
//   storeSum += e.target.value;
//   if (e.target.value === 0) {

//   }
//   if (storeOperator === "") {
//     storeNum1 += e.target.value;
//   } else if (storeOperator) {
//     storeNum2 += e.target.value;
//   }
//   display.innerHTML = displayNum;
//   rt.innerHTML = storeSum;
//   answer.innerHTML = "";
// };
// let numButtons = document.getElementsByClassName("number");
// for (let i = 0; i < numButtons.length; i++) {
//   console.log(numButtons[i]);
//   numButtons[i].addEventListener("click", numClick);
// }

// const pointOperator = (arg, e) => {
//   if (displayNum === "") {
//     arg += 0;
//     arg += e.target.value;
//     decimal += e.target.value;
//     displayNum += 0;
//     displayNum += decimal;
//     storeSum += 0;
//     storeSum += e.target.value;
//   } else if (decimal === "") {
//     arg += e.target.value;
//     decimal += e.target.value;
//     displayNum += decimal;
//     storeSum += decimal;
//   } else if (decimal.length > 0) {
//     return;
//   }
// };

// const decimalClick = e => {
//   if (storeOperator === "") {
//     pointOperator(storeNum1, e);
//   } else if (storeOperator) {
//     pointOperator(storeNum2, e);
//   }
//   display.innerHTML = displayNum;
//   answer.innerHTML = "";
//   rt.innerHTML = storeSum;
// };
// let pointButton = document.getElementById("point");
// pointButton.addEventListener("click", decimalClick);

// const operatorClick = e => {
//   displayNum = "";
//   decimal = "";
//   storeSum += e.target.value;
//   storeOperator += e.target.value;
//   display.innerHTML = displayNum;
// };
// let operatorButtons = document.getElementsByClassName("action");
// for (let i = 0; i < operatorButtons.length; i++) {
//   console.log(operatorButtons[i]);
//   operatorButtons[i].addEventListener("click", operatorClick);
// }

// const equalsClick = arg => {
//   const result = getResult(storeNum1, storeOperator, storeNum2);
//   answer.innerHTML = result;
//   displayNum = "";
//   storeNum1 = "";
//   storeOperator = "";
//   storeNum2 = "";
// };

// let equalsButton = document.getElementById("equals");
// equalsButton.addEventListener("click", equalsClick);
