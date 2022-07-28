const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  }
  
  
  document.getElementByClass('button') { button.addEventListener('click', displayNumber)('calculator-screen')
    
  })
  
  document.getElementByClass('operator')
  button.addEventListener('click', function {
                          
                          
                          }                       )
  // This function clears all the values
  function clear() {
  
     document.getElementByClass("clear").value= "";
  
  }
  
  // This function display values
  
  function display(equal) {
      document.getElementByClass("number").value += value;
  
  }
  
  // This function evaluates the expression and returns result
  
  function calculate() {
  
      let p = document.getElementByClass("button")          .value;
      let q = eval(p);
  
      document.getElementByClass("button") .value              = q;
  
  }
  
  
  function updateDisplay("calculator-screen") {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('number');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
  }
  
  