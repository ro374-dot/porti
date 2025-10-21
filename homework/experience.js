// homework/experience.js

// Step 1: Skills array and DOM setup
let skills = [];
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

// Step 2: Projects data and display
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

const projectContainer = document.getElementById('project-list');

function displayProjects() {
  projectContainer.innerHTML = '';
  const today = new Date();

  for (let p of projects) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6';

    const card = document.createElement('div');
    card.className = 'card hover-shadow project';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const titleEl = document.createElement('h4');
    titleEl.className = 'card-title';
    titleEl.textContent = p.title;

    const descEl = document.createElement('p');
    descEl.className = 'card-text';
    descEl.textContent = p.description;

    // Determine status based on date
    const deadlineDate = new Date(p.deadline);
    let statusText = '';
    if (deadlineDate > today) {
      statusText = 'Ongoing';
    } else {
      statusText = 'Completed';
    }

    const statusEl = document.createElement('p');
    statusEl.innerHTML = `<strong>Status:</strong> ${statusText} <br><strong>Deadline:</strong> ${p.deadline}`;

    cardBody.appendChild(titleEl);
    cardBody.appendChild(descEl);
    cardBody.appendChild(statusEl);
    card.appendChild(cardBody);
    cardCol.appendChild(card);
    projectContainer.appendChild(cardCol);
  }
}

// Step 4: Resume download tracking
let downloadCount = 0;
const downloadCountEl = document.getElementById('downloadCount');
const downloadBtn = document.getElementById('downloadResumeBtn');

downloadBtn.addEventListener('click', () => {
  downloadCount++;
  downloadCountEl.textContent = downloadCount;
});

// Step 5: Generate Experience Table
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

function generateExperienceTable() {
  const container = document.createElement('div');
  const heading = document.createElement('h4');
  heading.className = 'text-center mb-3';
  heading.textContent = 'Experience';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'table-responsive';

  const table = document.createElement('table');
  table.className = 'table table-bordered';

  const thead = document.createElement('thead');
  thead.className = 'table-secondary';

  const headerRow = document.createElement('tr');
  ['Role', 'Company', 'Start', 'End'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  experienceData.forEach(item => {
    const row = document.createElement('tr');
    [item.role, item.company, item.start, item.end].forEach(val => {
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
// Call experience table generator
generateExperienceTable();

// Step 5: Generate Education Table
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

function generateEducationTable() {
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
  educationData.forEach(item => {
    const row = document.createElement('tr');
    [item.institution, item.degree, item.duration].forEach(val => {
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
// Call education table generator
generateEducationTable();

// Step 6: Theme toggle & style customization
const themeBtn = document.getElementById('toggleThemeBtn');
const bodyEl = document.body;
const bgColorPicker = document.getElementById('bgColorPicker');
const fontSizeInput = document.getElementById('fontSizeInput');

let isDark = false;
themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
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

// Call display projects on load
window.addEventListener('load', () => {
  displayProjects();
});
