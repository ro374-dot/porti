console.log('Hello World!'); // Verify integration

// Variables
const ownerName = "Rudy";
let hasDownloadedResume = false;

// Function to generate greeting message
function showGreeting(name) {
  return `Hello, my name is ${name}! Welcome to my portfolio!`;
}

// Function to display greeting in the HTML element
function displayGreeting() {
  const greetingEl = document.getElementById('greeting');
  if (greetingEl) {
    greetingEl.textContent = showGreeting(ownerName);
  }
}

// Function to calculate days until a deadline
function daysUntilDeadline(deadline) {
  const today = new Date();
  const diffTime = deadline - today; // in ms
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Set your project deadline
const projectDeadline = new Date('2025-12-31');
const remainingDays = daysUntilDeadline(projectDeadline);
console.log(`Days until project deadline: ${remainingDays}`);

// Wait for DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  
  // Display greeting message
  displayGreeting();
  let downloadCount = 0;
  const $downloadCountDisplay = $('#downloadCountDisplay');

  // Attach click event to the resume download button
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (!hasDownloadedResume) {
        // Delay alert by 2 seconds
        setTimeout(() => {
          alert("Your resume is downloaded successfully!");
        }, 2000);
        hasDownloadedResume = false; // prevent multiple alerts
        downloadCount++;
        $downloadCountDisplay.text(downloadCount);
      }
    });
  }
});




