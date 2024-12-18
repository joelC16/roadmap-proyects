let tasks = [
    { id: 1, description: 'Task 1', status: 'incomplete' },
    { id: 2, description: 'Task 2', status: 'incomplete' }
];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the existing tasks

    // Render tasks, first the incomplete ones and then the completed ones
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        if (task.status === 'complete') {
            taskItem.classList.add('complete');
        }

        taskItem.innerHTML = `
            ${task.description}
            <button onclick="toggleTaskStatus(${task.id})">${task.status === 'complete' ? 'Unmark' : 'Mark as Complete'}</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to toggle task status between complete and incomplete
function toggleTaskStatus(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = task.status === 'complete' ? 'incomplete' : 'complete';
        if (task.status === 'complete') {
            // Move completed task to the end of the list
            tasks.push(tasks.splice(tasks.indexOf(task), 1)[0]);
        }
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Event listener for the form submission
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()) {
        const newTask = {
            id: tasks.length + 1, // Simple ID generation
            description: taskInput.value.trim(),
            status: 'incomplete'
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = ''; // Clear the input
    }
});

// Initial render
renderTasks();