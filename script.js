// Select the counter text and button
const counterElement = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");

// Initialize the click count
let clickCount = 0;

// Add an event listener to the button
clickButton.addEventListener("click", () => {
  // Increment the count
  clickCount++;

  // Update the counter text
  counterElement.textContent = `You have clicked the button ${clickCount} ${clickCount === 1 ? 'time' : 'times'}.`;
});
