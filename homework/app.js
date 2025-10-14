console.log('Hello World!'); // Verify integration

// Variables
const ownerName = "Rudy";
let hasDownloadedResume = false;

// Show greeting
function showGreeting(name) {
  return `Hello, my name is ${name}! Welcome to my portfolio!`;
}

function displayGreeting() {
  const greetingMsg = showGreeting(ownerName);
  document.getElementById('greeting').textContent = greetingMsg;
}

// Date calculation
const projectDeadline = new Date('2025-12-31');

function daysUntilDeadline(deadline) {
  const today = new Date();
  const diffTime = deadline - today; // in ms
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

const remainingDays = daysUntilDeadline(projectDeadline);
console.log(`Days until project deadline: ${remainingDays}`);

// Resume download alert with delay
document.getElementById('downloadBtn').addEventListener('click', () => {
  // Remove the if condition to allow alert every time
  setTimeout(() => {
    alert("Your resume is downloaded successfully!");
  }, 2000);
});

// Display greeting on load
window.addEventListener('load', () => {
  displayGreeting();
});
