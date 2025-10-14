console.log('Hello World!');

let hasDownloadedResume = false;

document.getElementById('downloadBtn').addEventListener('click', () => {
  if (!hasDownloadedResume) {
    setTimeout(() => {
      alert("Your resume is downloaded successfully!");
    }, 2000);
    hasDownloadedResume = true;
  }
});
const ownerName = "Rudy"; // or your name
let hasDownloadedResume = false; // already declared above
