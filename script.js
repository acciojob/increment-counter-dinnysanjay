//your JS code here. If required.
// Access the elements
let counter = document.getElementById('counter');
let button = document.getElementById('incrementBtn');

// Add event listener to the button
let counterValue="0";
incrementBtn.addEventListener("click", function() {
    alert(counterValue);
    counterValue++;
    counterElement.textContent = counterValue;
});