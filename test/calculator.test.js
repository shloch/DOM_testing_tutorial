import displayAnswer from '../src/displayAnswer';
import sum from '../src/calculator';

beforeEach(() => {

  document.body.innerHTML = `
  <div id="calculator">
    <h3 id="notification"></h3>

    <input type="number" value="5" name="numberOne" id="numberOne" />
    +
    <input type="number" value="3" name="numberTwo" id="numberTwo" />
    <button id="addBtn">GET ANSWER</button>
  </div>
  `;
});


test('Ensure SUM function works', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(10, 1)).toBe(11);
  expect(sum(-2, 6)).toBe(4);
});


describe('Testing that Result displays in DOM', () => {
  test('Check answer Notification', () => {
    const notification = document.querySelector('#notification');
    displayAnswer();
    expect(notification.innerHTML).toEqual("The sum is = 8");
  });




});