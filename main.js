let screen = document.getElementById("display")
screen.innerHTML = "";

seven.addEventListener("click", function (event) {
    screen.innerHTML += "7";
})

eight.addEventListener("click", function (event) {
    screen.innerHTML += "8";
})

nine.addEventListener("click", function (event) {
    screen.innerHTML += "9";
})

four.addEventListener("click", function (event) {
    screen.innerHTML += "4";
})

five.addEventListener("click", function (event) {
    screen.innerHTML += "5";
})

six.addEventListener("click", function (event) {
    screen.innerHTML += "6";
})

one.addEventListener("click", function (event) {
    screen.innerHTML += "1";
})

two.addEventListener("click", function (event) {
    screen.innerHTML += "2";
})

three.addEventListener("click", function (event) {
    screen.innerHTML += "3";
})

zero.addEventListener("click", function (event) {
    screen.innerHTML += "0";
})

decimal.addEventListener("click", function (event) {
    screen.innerHTML += ".";
})

plus.addEventListener("click", function (event) {
    screen.innerHTML += "+";
})

minus.addEventListener("click", function (event) {
    screen.innerHTML += "-";
})

multiply.addEventListener("click", function (event) {
    screen.innerHTML += "*";
})

divide.addEventListener("click", function (event) {
    screen.innerHTML += "/";
})

clear.addEventListener("click", function (event) {
    screen.innerHTML = "";
})

equal.addEventListener("click", function (event) {
    screen.innerHTML = eval(screen.innerHTML);
})

// const numberKeys = document.querySelectorAll('.buttons');
// const operatorKeys = document.querySelectorAll('.operators');
// let display = document.getElementById('result-screen');
 
 

// const clearScreen = document.querySelector('.clear');
// const equal = document.querySelector('.equal');


// for (let operator of operatorKeys) {
//     operator.addEventListener("click", function (event) {
//         display.innerText = event.target.innerHTML
// })
// }

// clearScreen.addEventListener("click", function (event) {
//     display.innerText = ""})



// for (let numberKey in numberKeys) {
//     numberKey.addEventListener("click", function (event){
//        console.log("click"); 
//         display.innerHTML  = event.target.innerHTML;
// })
// }

// equal.addEventListener("click", function (event) {
//     display.innerText = event.target.innerHTML
// })

// function calcNumbers(firstNumber, operator, secondNumber) {
//   firstNumber = parseInt(firstNumber)
//   secondNumber = parseInt(secondNumber)
  
//   if (operatorKeys === '+') return firstNumber + secondNumber
//   if (operatorKeys === '-') return firstNumber - secondNumber
//   if (operatorKeys === '*') return firstNumber * secondNumber
//   if (operatorKeys === '/') return firstNumber / secondNumber

//   console.log(calcNumbers);
// }
 






//function updateDisplay("result") {
      // select the element with class of `result-screen`
  //const display = document.querySelector('button');
       // update the value of the element with the contents of `displayValue`
  //display.value = calculator.displayValue;
//}








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
//}


//const clickSoundMain = document.getElementById('#click-button')
//const clickSoundMain = document.getElementById('#click-operator')