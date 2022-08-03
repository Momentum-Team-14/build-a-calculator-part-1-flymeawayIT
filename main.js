
//const result-screen = {
   // displayValue: '0',
  //  firstOperand: null,
  //  waitingForSecondOperand: false,
   // operator: null,
 // }
  
//const calculator = document.querySelector('.calculator');
const numberKeys = document.querySelector('.buttons');
const operatorKeys = document.querySelector('.operator');
const display = document.querySelector('.result-screen');
const clear = document.querySelector('.clear');
const equal = document.querySelector"('.equal');
const result = document.getElementById("result-screen");

for (let button of buttons) { 
    button.addEventListener('click', display("result-screen")) 

}

for (let operator of operators) {
    operator.addEventListener('click', display."results-screen") 
}

clear.addEventListener("click", clearResult)

numberKeys.addEventListener("buttons"inputResult)

equal.addEvenbtListener("equal"inputResult)

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)
  
  if (operator === '+') return firstNumber + secondNumber
  if (operator === '-') return firstNumber - secondNumber
  if (operator === '*') return firstNumber * secondNumber
  if (operator === '/') return firstNumber /  secondNumber
  
}
 

function updateDisplay("result-screen") {
  // select the element with class of `result-screen`
  const display = document.querySelector('button');
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}








//const key = event.target
//const keyValue = key.textContent
//const displayValue =display.textContent
//const { type } = key.dataset
//const { previousKeyType } = calculator.dataset



//if (type === 'number') {
  //if (displayValue === "0" || previousKeyType === 'operator') { display.textContent = keyValue }
 // else { display.textContent = displayValue + keyValue
//} 
//}


//if (type === 'operator') { const operatorKeys = keys.querySelectorAll('[button="operator"]') operatorKey.forEach(el => { el.dataset.state = ''}) key.dataset.state = ()'selected')
                         
  //calculator.dataset.firstNumber = dispalyValue
  //calculator.dataset.opeartor = key.dataset.key                        
  //}

//if (type === 'equal') { 
  //const firstNumber =                calculator.dataset.firstNumber
  //const operator - calculator.dataset.operator
  //const secondNumber = displayValue
  //display.textContent = calculate(firstNumber, operator, secondNumber)
  //comnsole.log(display.textContent)
  
//}

//if (type === 'clear') {
//display.textContent = '0'
 // delete calculator.dataset.firstNumber
 // delete calculator.dataset.operator
//}

//calculator.dataset.previousKeyType = type
}


//const clickSoundMain = document.getElementById('#click-button')
//const clickSoundMain = document.getElementById('#click-operator')