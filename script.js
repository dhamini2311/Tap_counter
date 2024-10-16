// Initialize the count to 0
let count = 0;

// Select the HTML elements
const countDisplay = document.getElementById("count");
const tapButton = document.getElementById("tapButton");

// Add a click event listener to the button
tapButton.addEventListener("click", function() {
    // Increment the count
    count++;
    
    // Update the count display
    countDisplay.textContent = count;
});
