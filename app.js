function calculate() {
  const num1 = document.getElementById("cislo1").value;
  const num2 = document.getElementById("cislo2").value;
  const operatorType = document.getElementById("menu").value;
  
  //alert(num1);
  //alert(num2);
  //alert(operatorType)

  let result;

  switch (operatorType) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      if (Number(num2) === 0) {
        result = "Error! Division by zero";
      } else {
        result = Number(num1) / Number(num2);
      }
      break;
    default:
      result = "Invalid operator";
  }


  if (Number(num2) === 0) {
        document.getElementById("result").textContent = "Result: " + result;
      } else {
        document.getElementById("result").innerText = "Result: " + result.toFixed(2);
      }
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "+";
  document.getElementById("result").innerText = "Result: ";
}