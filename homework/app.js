console.log('Hello World!'); // Verify integration

// Variables
const ownerName = "Rudy";
let hasDownloadedResume = false;
let downloadCount = 0;
const $downloadCountDisplay = $('#downloadCountDisplay');

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

document.addEventListener('DOMContentLoaded', () => {
  // Display greeting
  displayGreeting();

  // Attach click event to the download button (using vanilla JS for consistency)
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // Open the link in a new tab
      window.open('https://profile.indeed.com/p/rudyo-h8rcht0', '_blank');

      // Handle alert and count
      if (!hasDownloadedResume) {
        setTimeout(() => {
          alert("Your resume is downloaded successfully!");
        }, 2000);
        hasDownloadedResume = true; // prevent multiple alerts
      }

      // Increment download count and update display
      downloadCount++;
      $downloadCountDisplay.text(downloadCount);
    });
  }
});
