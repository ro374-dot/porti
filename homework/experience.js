let skills = [];

// Load skills from local storage if needed
const skillsListEl = document.getElementById('skillsList');
const skillInput = document.getElementById('skillInput');
const addSkillBtn = document.getElementById('addSkillBtn');

addSkillBtn.addEventListener('click', () => {
  const skill = skillInput.value.trim();
  if (skill) {
    skills.push(skill);
    renderSkills();
    skillInput.value = '';
  }
});

function renderSkills() {
  skillsListEl.innerHTML = '';
  skills.forEach(s => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = s;
    skillsListEl.appendChild(li);
  });
}

// Initialize with some skills if desired
// skills = ['JavaScript', 'HTML', 'CSS'];
// renderSkills();

// Projects data
const projects = [
  {
    title: 'Animal Crossing Model',
    description: 'Texturing and modeling...',
    deadline: '2025-12-31'
  },
  {
    title: 'Game Development',
    description: 'Cyberpunk style game project.',
    deadline: '2024-11-01'
  },
  {
    title: 'Website Redesign',
    description: 'Redesign of personal website.',
    deadline: '2023-01-15'
  }
];

const projectsContainer = document.querySelector('#projects .row');

function displayProjects() {
  projectsContainer.innerHTML = '';
  const today = new Date();

  for (let p of projects) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6';

    const card = document.createElement('div');
    card.className = 'card hover-shadow project';
    card.setAttribute('data-bs-toggle', 'modal');
    // You can add modal triggers if needed

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const titleEl = document.createElement('h4');
    titleEl.className = 'card-title';
    titleEl.textContent = p.title;

    const descEl = document.createElement('p');
    descEl.className = 'card-text';
    descEl.textContent = p.description;

    // Deadline and status
    const deadlineDate = new Date(p.deadline);
    let statusText = '';
    if (deadlineDate > today) {
      statusText = 'Ongoing';
    } else {
      statusText = 'Completed';
    }
    const statusEl = document.createElement('p');
    statusEl.innerHTML = `<strong>Status:</strong> ${statusText} <br> <strong>Deadline:</strong> ${p.deadline}`;

    cardBody.appendChild(titleEl);
    cardBody.appendChild(descEl);
    cardBody.appendChild(statusEl);
    card.appendChild(cardBody);
    cardCol.appendChild(card);
    projectsContainer.appendChild(cardCol);
  }
}

// Resume download counter
let downloadCount = 0;
const downloadCountEl = document.getElementById('downloadCount');
const downloadBtn = document.getElementById('downloadResumeBtn');

downloadBtn.addEventListener('click', () => {
  downloadCount++;
  downloadCountEl.textContent = downloadCount;
});

// Dynamic Experience Table
const experienceData = [
  {
    role: 'Intern',
    company: 'Local Government IT Department',
    start: '2022-01',
    end: '2022-06'
  },
  {
    role: 'Cybersecurity Student',
    company: 'NAU',
    start: '2023-08',
    end: 'Present'
  }
];

const experienceContainer = document.getElementById('experienceTableContainer');

function generateTable(data, title) {
  const container = document.createElement('div');
  const heading = document.createElement('h4');
  heading.className = 'text-center mb-3';
  heading.textContent = title;
  const tableDiv = document.createElement('div');
  tableDiv.className = 'table-responsive';

  const table = document.createElement('table');
  table.className = 'table table-bordered';

  const thead = document.createElement('thead');
  thead.className = 'table-secondary';

  const headerRow = document.createElement('tr');
  Object.values(data[0]).forEach(header => {
    const th = document.createElement('th');
    th.textContent = header.charAt(0).toUpperCase() + header.slice(1);
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    Object.values(item).forEach(val => {
      const td = document.createElement('td');
      td.textContent = val;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  tableDiv.appendChild(table);
  container.appendChild(heading);
  container.appendChild(tableDiv);
  experienceContainer.innerHTML = '';
  experienceContainer.appendChild(container);
}

// Generate Experience Table
generateTable(experienceData, 'Experience');

// Education data
const educationData = [
  {
    institution: 'Local High School',
    degree: 'High School Diploma',
    duration: '2018-2022'
  },
  {
    institution: 'NAU',
    degree: 'Cybersecurity Student',
    duration: '2023-Present'
  }
];

const educationContainer = document.getElementById('educationTableContainer');

function generateEducationTable(data) {
  const container = document.createElement('div');
  const heading = document.createElement('h4');
  heading.className = 'text-center mb-3';
  heading.textContent = 'Education';
  const tableDiv = document.createElement('div');
  tableDiv.className = 'table-responsive';

  const table = document.createElement('table');
  table.className = 'table table-bordered';

  const thead = document.createElement('thead');
  thead.className = 'table-secondary';

  const headerRow = document.createElement('tr');
  ['Institution', 'Degree', 'Duration'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    Object.values(item).forEach(val => {
      const td = document.createElement('td');
      td.textContent = val;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  tableDiv.appendChild(table);
  container.appendChild(heading);
  container.appendChild(tableDiv);
  educationContainer.innerHTML = '';
  educationContainer.appendChild(container);
}

// Generate Education Table
generateEducationTable(educationData);

// Theme toggle and style customization
const themeButton = document.getElementById('toggleThemeBtn');
const bodyEl = document.body;
const bgColorPicker = document.getElementById('bgColorPicker');
const fontSizeInput = document.getElementById('fontSizeInput');

let isDarkTheme = false;

themeButton.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  if (isDarkTheme) {
    bodyEl.classList.add('dark-theme');
  } else {
    bodyEl.classList.remove('dark-theme');
  }
});

bgColorPicker.addEventListener('input', () => {
  bodyEl.style.backgroundColor = bgColorPicker.value;
});

fontSizeInput.addEventListener('change', () => {
  bodyEl.style.fontSize = fontSizeInput.value + 'px';
});

// Optional: Define dark theme styles
const style = document.createElement('style');
style.innerHTML = `
  .dark-theme {
    background-color: #222 !important;
    color: #eee !important;
  }
  .dark-theme header, .dark-theme footer {
    background: linear-gradient(135deg, #222, #444);
    color: #eee;
  }
`;
document.head.appendChild(style);

// Call display functions on load
window.addEventListener('load', () => {
  displayProjects();
  // Load skills from local storage if desired
  // (Optional: implement storage persistence)
});
