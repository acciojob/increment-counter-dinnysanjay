//your JS code here. If required.
let counterElement = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');

// Initialize counter value
let counterValue = 0;

// Add event listener to the button
incrementBtn.addEventListener("click", function() {
    alert(counterValue);
    counterValue++;
    counterElement.textContent = counterValue;
});