let displayNum = "";
let storeNum1 = "";
let storeOperator = "";
let storeNum2 = "";
let calculationFin = false;
console.log(storeNum1, storeOperator, storeNum2);

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
  calculationFin = false;
  displayNum += e.target.value;
  if (storeOperator === "") {
    storeNum1 += e.target.value;
  } else if (storeOperator) {
    storeNum2 += e.target.value;
  }
  display.innerHTML = displayNum;
};
let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  console.log(numButtons[i]);
  numButtons[i].addEventListener("click", numClick);
}

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
  let result;
  if (storeOperator === "+") {
    result = Number(storeNum1) + Number(storeNum2);
  } else if (storeOperator === "-") {
    result = Number(storeNum1) - Number(storeNum2);
  } else if (storeOperator === "*") {
    result = Number(storeNum1) * Number(storeNum2);
  } else if (storeOperator === "/") {
    result = Number(storeNum1) / Number(storeNum2);
  }
  answer.innerHTML = result;
  calculationFin = true;
};

let equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", equalsClick);

if (calculationFin === true) {
  displayNum = "";
  storeNum1 = "";
  storeOperator = "";
  storeNum2 = "";
}

// const button1 = document.getElementById("one");
// button1.addEventListener("click", numClick);

// button1.addEventListener("click", numClick);

// const numInput = num => {
//   if (display.value == "") {
//     return;
//   } else if (calculationFin == true) {
//     display.value = num;
//     calculationFin = false;
//   } else display.value += num;
// };

//element.innerHTML()
