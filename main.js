// This function clears all the values
function clear() {

    document.getElementByClass("clear").value= "";
 
 }
 
 // This function display values
 
 function display(equal) {
     document.getElementByClass("result").value += value;
 
 }
 
 // This function evaluates the expression and returns result
 
 function calculate() {
 
     let p = document.getElementByClass("button")          .value;
     let q = eval(p);
 
     document.getElementByClass("button") .value              = q;
 
 }
 
 const calculator = {
   displayValue: '0',
   firstOperand: null,
   waitingForSecondOperand: false,
   operator: null,
 }
 
 function updateDisplay() {
   // select the element with class of `calculator-screen`
   const display = document.querySelector('.calculator-screen');
   // update the value of the element with the contents of `displayValue`
   display.value = calculator.displayValue;
 }
 
 