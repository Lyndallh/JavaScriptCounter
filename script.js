function add (step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

function reset() {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - parseInt(number);
    numberElement.innerText = number;
}

function addButton() {
    let numberInput = document.getElementById('numberInput').value || 0;// takes a number from the input feild, if no number, then 0
    let numberElement = document.getElementById("number");//gets the element with the id of number
    let number = numberElement.innerText;//gets the text (which in this case is a number) inside the element
    number = parseInt(numberInput) + parseInt(number);//creates the new number
    numberElement.innerText = number;//writes the new number into the number element text feild
}

function subtractButton() {
    let numberInput = document.getElementById('numberInput').value || 0;
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - parseInt(numberInput);
    numberElement.innerText = number;
}



