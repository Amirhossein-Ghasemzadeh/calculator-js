let display = document.querySelector('#display');
let btnNumbers = document.querySelectorAll('.num__key');
let btnBackSpace = document.querySelector('#btn-back-space');
let btnClear = document.querySelector('#btn-clear');
let btnPn = document.querySelector('#btn-pn');

let btnDiv = document.querySelector("#btn-div");
let btnMul = document.querySelector('#btn-mul');
let btnMinus = document.querySelector('#btn-minus');
let btnPlus = document.querySelector('#btn-plus');
let btnEquls = document.querySelector('#btn-equls');
let btnPoint = document.querySelector("#dot");

let setPoint = false;
let number1;
let number2;
let result;
let setResult = false;
let op = "";

//EventListeners

//plus button
btnPlus.addEventListener('click', (e) => {
    number1 = Number(display.textContent);
    display.textContent = '0';
    op = "+"
    setPoint = false;
});

//minus button
btnMinus.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0";
  op = "-";
  setPoint = false;
});

//division button
btnDiv.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0";
  op = "/";
  setPoint = false;
});

//mul button
btnMul.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0";
  op = "*";
  setPoint = false;
});

//equls button
btnEquls.addEventListener('click', (e) => {
    if(setResult == false) {
        number2 = Number(display.textContent);
       display.textContent = "";
    } else {
        number1 = Number(display.textContent);
        display.textContent = "";
    }   

    switch (op) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
    }
    display.textContent += result;
    setResult = true;
});

//clear Button
btnClear.addEventListener("click", (e) => {
  display.textContent = "0";
  setPoint = false;
  setResult = false;
   number1 =0 ;
   number2 = 0;
});

//backspace Button
btnBackSpace.addEventListener('click', (e) => {
    let len = display.textContent.length;
    let lastDigit = display.textContent.substr(len - 1, len);
    if (lastDigit == '.') {
        setPoint = false;
    };
    if(len > 1) {
        display.textContent = display.textContent.substr(0, len - 1);
    } else {
        display.textContent = "0";
    };
      number1 = 0;
      number2 = 0;
      setPoint = false;
      setResult = false;
});

//Number Buttons
btnNumbers.forEach((item) => {
    item.addEventListener('click', (e) => {
        if(display.textContent == "0") {
        display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent
        };  
    });
});
 
// point Button
btnPoint.addEventListener('click', (e) => {
    e.preventDefault();
    if(setPoint == false) {
        display.textContent += ".";
        setPoint = true;
    };
});

//btn pn
btnPn.addEventListener('click', (e) => {
    display.textContent = display.textContent * -1;
});

//Black theme
let checkbox = document.querySelector("input[name=theme]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  };
});