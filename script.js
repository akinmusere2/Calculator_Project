let currentValue = "";

function pressButton(value) {
  if (currentValue == "0") {
    currentValue = value;
  } else {
    currentValue = currentValue + value;
  }
  document.getElementById("display").value = currentValue;
}

function getAnswer() {
  let num1, num2, operator;
  console.log(currentValue);
  console.log(currentValue.split(/\s*([+-])\s*/));

  if (currentValue.includes("+")) {
    [num1, num2] = currentValue.split("+");
    operator = "+";
  } else if (currentValue.includes("-")) {
    [num1, num2] = currentValue.split("-");
    operator = "-";
  } else if (currentValue.includes("*")) {
    [num1, num2] = currentValue.split("*");
    operator = "*";
  } else if (currentValue.includes("/")) {
    [num1, num2] = currentValue.split("/");
    operator = "/";
  }

  num1 = Number(num1);
  num2 = Number(num2);

  let answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      answer = "Invalid";
  }

  document.getElementById("display").value = answer;
  currentValue = String(answer);
}

function clearScreen() {
  currentValue = "0";
  document.getElementById("display").value = "0";
}

function sum(a,b){

 return a+b
}

console.log(sum(2,2))


var countSheep = function (num){
  for (let i=0; i<=num; i++){
    return num + " sheep"
  }
}

console.log(countSheep(0))