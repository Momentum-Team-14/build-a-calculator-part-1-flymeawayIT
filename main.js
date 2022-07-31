
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  }
  
  
  document.getElementsByClass('button') { button.addEventListener('click', displayNumber)('calculator-screen')
    
  })
  
  document.getElementsByClass('operator')
  button.addEventListener('click', function {
                          
                          
                          }                       )
  // This function clears all the values
  function clear() {
  
     document.getElementsByClass("clear").value= "";
  
  }
  
  // This function display values
  
  function display(equal) {
      document.getElementsByClass("number").value += value;
  
  }
  
  // This function evaluates the expression and returns result
  
  function calculate() {
  
      let p = document.getElementByClass("button")          .value;
      let q = eval(p);
  
      document.getElementByClass("button") .value              = q;
  
  }
  
  
  function updateDisplay("result-screen") {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('number');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
  }
  
  const clickSoundMain = document.getElementById('#click-button')
  const clickSoundMain = document.getElementById('#click-operator')
