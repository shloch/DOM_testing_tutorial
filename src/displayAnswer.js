import sum from './calculator';

const displayAnswer = () => {
  const notification = document.querySelector("#notification");

  const numberOne = +document.querySelector("#numberOne").value;  //collect number1
  const numberTwo = +document.querySelector("#numberTwo").value;  //collect number2
  const answer = sum(numberOne, numberTwo);

  notification.innerHTML = `The sum is = ${answer}`;   //insert answer into notification tag
}

export default displayAnswer;