// Function to add two numbers and display the result

function mouseover() {

    var a1 = document.getElementById('a1');
    a1.style.textDecoration = 'underline';
}


function mouseout() {

    var a2 = document.getElementById('a1');
    a2.style.textDecoration = 'none';
}

document.getElementById('lbl').innerText = " Welcome, User";




function Addition() {
    var n1 = document.getElementById('first').value;
    document.getElementById('result').innerText = n1;
}

function ClearValue() {
    document.getElementById('first').value = '';
}

function addNumbers() {
    debugger;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById('sumResult').innerText = "Sum: " + sum;
}

// Function to change the text content of an element
function changeText() {
    debugger;
    document.getElementById('textElement').innerText = "The text has been changed!";
}

// Function to display the current date and time
function displayDateTime() {
    debugger;
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById('dateTimeResult').innerText = "Current Date and Time: " + dateTimeString;
}