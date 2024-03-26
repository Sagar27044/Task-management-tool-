// Sample data
const teamMembers = ['Sagar', 'Amit', 'Aditi'];
const tasks = [];

// Populate team members dropdown
const assigneeDropdown = document.getElementById('assignee');
teamMembers.forEach(member => {
  const option = document.createElement('option');
  option.textContent = member;
  option.value = member;
  assigneeDropdown.appendChild(option);
});

// Event listener for project creation form
document.getElementById('projectForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const projectName = document.getElementById('projectName').value;
  alert(`Project "${projectName}" created successfully!`);
});

// Event listener for adding team members form
document.getElementById('teamForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const teamMember = document.getElementById('teamMember').value;
  teamMembers.push(teamMember);
  const option = document.createElement('option');
  option.textContent = teamMember;
  option.value = teamMember;
  assigneeDropdown.appendChild(option);
  alert(`Team member "${teamMember}" added successfully!`);
});

// Event listener for task allocation form
document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const taskName = document.getElementById('taskName').value;
  const assignee = document.getElementById('assignee').value;
  tasks.push({ name: taskName, assignee: assignee });
  updateTasksList();
  alert(`Task "${taskName}" allocated to "${assignee}" successfully!`);
});

// Function to update tasks list
function updateTasksList() {
  const tasksList = document.getElementById('tasksList');
  tasksList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.name} - Assignee: ${task.assignee}`;
    tasksList.appendChild(li);
  });
}
