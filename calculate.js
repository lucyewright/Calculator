export const calculate = (num1, o, num2) => {
  let n1 = Number(num1);
  let n2 = Number(num2);
  switch (o) {
    case "+": {
      return n1 + n2;
    }
    case "-": {
      return n1 - n2;
    }
    case "x": {
      return n1 * n2;
    }
    case "/": {
      return n1 / n2;
    }
    default: {
      return undefined;
    }
  }
};

export const initialOperators = sum => {
  return sum.findIndex(item => item === "x" || item === "/");
};

export const secondOperators = sum => {
  return sum.findIndex(item => item === "+" || item === "-");
};

export const operatorEnd = sum => {
  let last = sum[sum.length - 1];
  if (last === "+" || last === "-" || last === "x" || last === "/") {
    return true;
  }
  return false;
};

export const equals = sum => {
  if (operatorEnd(sum)) {
    sum.splice(sum.length - 1, 1);
  }
  while (initialOperators(sum) !== -1) {
    let i = initialOperators(sum);
    let mini = sum.slice(i - 1, i + 2);
    let ans = calculate(...mini);
    sum.splice(i - 1, 3, ans);
  }
  while (secondOperators(sum) !== -1) {
    let i = secondOperators(sum);
    let mini = sum.slice(i - 1, i + 2);
    let ans = calculate(...mini);
    sum.splice(i - 1, 3, ans);
  }
  return sum[0];
};
