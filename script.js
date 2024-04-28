//your JS code here. If required.
let counterElement = document.getElementById('counter');
let counterValue = 0;

function incrementCounter() {
    alert(counterValue);
    counterValue++;
    counterElement.textContent = counterValue;
}