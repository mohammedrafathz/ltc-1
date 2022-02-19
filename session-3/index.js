// alert('hello world')
// 1. we write code make computer do our job
// 2. you should focus to wirte codde in such a way that you change it later easily

// add, subract/ mul / div

// how to take input from user

// type conversion 
// string concat
// addition

// let vs const



while (true) {
  let num1 = +prompt("Enter first number");
  let num2 = +prompt("Enter second number");
  let result;
  let operator = prompt("Select your operation. + - * /");

  switch (operator) {
    case "+":
      result = add(num1, num2)
      break;

    case "-":
      result = sub(num1, num2)
      break;

    case "*":
      result = mul(num1, num2)
      break;

    case "/":
      result = div(num1, num2)
      break;

    default:
      alert("You have entered an invalid operator");
      break;
  }

  alert(result);

  let userConsent = prompt("Do you want to continue? Y or N");

  if (userConsent.toLowerCase() === "y") {
    continue;
  } else {
    break;
  }
}



// write function to do the processing
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}



