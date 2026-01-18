
let num1 = 0;
let operator = "";
let display = document.querySelector("#display");
let digits = document.querySelectorAll(".digits");

let equalBtn = document.querySelector("#equalBtn");
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let mulBtn = document.querySelector("#mulBtn");
let divBtn = document.querySelector("#divBtn");
let acBtn = document.querySelector("#acBtn");
let deBtn = document.querySelector("#deBtn");


equalBtn.addEventListener("click", equalClick);
addBtn.addEventListener("click", addClick);
subBtn.addEventListener("click", subClick);
mulBtn.addEventListener("click", mulClick);
divBtn.addEventListener("click", divClick);
acBtn.addEventListener("click", acClick);
deBtn.addEventListener("click", deClick);


digits.forEach(btn => {
    btn.addEventListener("click", digitsClick);
});

function digitsClick(event) {
    let clickedValue = event.target.innerText;

    if(clickedValue === "." && display.value.includes(".")) {
        return;
    }

    if (display.value === "0" && clickedValue !== ".") {
        display.value = clickedValue;
    } else {
        display.value = display.value + clickedValue;
    }
}

function addClick() {
    num1 = parseFloat(display.value);
    operator = "+";
    display.value = ""; 
}

function subClick() {
    num1 = parseFloat(display.value);
    operator = "-";
    display.value = "";
}

function mulClick() {
    num1 = parseFloat(display.value);
    operator = "*";
    display.value = "";
}

function divClick() {
    num1 = parseFloat(display.value);
    operator = "/";
    display.value = "";
}

function acClick() {
    num1 = 0;
    operator = "";
    display.value = "0";
}

function deClick() {
 
    display.value = display.value.toString().slice(0, -1);
  
    if(display.value === "") {
        display.value = "0";
    }
}

function equalClick() {
    if (!display.value) return;

    let num2 = parseFloat(display.value);
    let result = 0;

    switch(operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if(num2 === 0) {
                alert("Cannot divide by Zero");
                result = 0;
            } else {
                result = num1 / num2; 
            }
            break;
        default: return;
    }

    display.value = result;
  
    operator = ""; 
}


let array = [];
let arrayResultBox = document.querySelector("#arrayResultBox");
let arrayAddBox = document.querySelector("#arrayAddBox");
let arrayDelBox = document.querySelector("#arrayDelBox");

let arrayAddBtn = document.querySelector("#arrayAddBtn");
let arrayDelBtn = document.querySelector("#arrayDelBtn");

arrayAddBtn.addEventListener("click", arrayAddClick);
arrayDelBtn.addEventListener("click", arrayDelClick);

function updateDisplay() {
    if(array.length === 0) {
        arrayResultBox.value = "Array is empty";
    } else {
        arrayResultBox.value = "[" + array.join(", ") + "]";
    }
}

function arrayAddClick() {
    let val = arrayAddBox.value.trim();
    
    if(val === "") {
        alert("Please enter a value to add");
        return;
    }

    array.push(val);
    updateDisplay();
    console.log(array);
    arrayAddBox.value = ""; 
    arrayAddBox.focus();
}

function arrayDelClick() {
    let val = arrayDelBox.value.trim();

    if(val === "") {
        alert("Please enter a value to delete");
        return;
    }

    let index = array.indexOf(val);

    if(index !== -1) {
        array.splice(index, 1);
        updateDisplay();
        console.log(array);
    } else {
        alert("Element not found in array!");
    }
    
    arrayDelBox.value = "";
}
