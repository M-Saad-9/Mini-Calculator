const form = document.getElementById("form");
const value1 = document.getElementById("value1");
  const value2 = document.getElementById("value2");
  const operators = document.getElementById("operator");
  const print = document.getElementById("print");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue1 = parseInt(value1.value);
  const userValue2 = parseInt(value2.value);
  const userOperator = operators.value;
  

  
   if (userOperator === '+') {
    const result = userValue1 + userValue2;
    print.innerHTML = result;
  } else if (userOperator === '-') {
    const result = userValue1 - userValue2;
    print.innerHTML = result;
  } else if (userOperator === '*') {
    const result = userValue1 * userValue2;
    print.innerHTML = result;
  } else if (userOperator === '/') {
    const result = userValue1 / userValue2;
    print.innerHTML = result;
  } else if (userOperator === '%') {
    const result = userValue1 % userValue2;
    print.innerHTML = result;
  } else {
    print.innerHTML = "Enter Your Correct Number And Operator"
  }
})