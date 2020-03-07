import sum from './calculator';

let addBtn = document.querySelector("#addBtn"); //add button
addBtn.addEventListener("click", function () {
  const numberOne = +document.querySelector("#numberOne").value;  //collect number1
  const numberTwo = +document.querySelector("#numberTwo").value;  //collect number2
  const answer = sum(numberOne, numberTwo);
  const notification = document.querySelector("#notification");
  notification.innerHTML = `The sum is = ${answer}`;   //insert answer into notification tag
})