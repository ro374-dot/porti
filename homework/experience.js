// Load existing data
let skills = JSON.parse(localStorage.getItem('skills')) || [];
let downloadCount = parseInt(localStorage.getItem('downloadCount')) || 0;

// Initialize UI with saved data
updateSkillsList();
document.getElementById('downloadCountDisplay').textContent = downloadCount;

// Function to refresh skills list UI
function updateSkillsList() {
  const list = document.getElementById('skillsList');
  list.innerHTML = '';
  skills.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = skill;
    list.appendChild(li);
  });
}

// Add skill button event
document.getElementById('addSkillBtn').addEventListener('click', () => {
  const skillInput = document.getElementById('skillInput');
  const skill = skillInput.value.trim();
  if (skill !== '') {
    skills.push(skill);
    skillInput.value = '';
    updateSkillsList();
    localStorage.setItem('skills', JSON.stringify(skills));
  }
});

// Download count event
document.getElementById('downloadBtn').addEventListener('click', () => {
  downloadCount++;
  localStorage.setItem('downloadCount', downloadCount);
  document.getElementById('downloadCountDisplay').textContent = downloadCount;
});
