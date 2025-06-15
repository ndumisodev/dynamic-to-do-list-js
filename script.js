
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // Check if task text is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const task = document.createElement('li');

        // Create a span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add event listener to remove button
        removeButton.onclick = function() {
            taskList.removeChild(task);
        };

        // Append task text and remove button to task
        task.appendChild(taskSpan);
        task.appendChild(removeButton);

        // Append task to task list
        taskList.appendChild(task);

        // Clear the task input field
        taskInput.value = "";
    }

    // Add event listeners
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});