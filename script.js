// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');

        // Create text node separately to preserve structure when adding button
        const taskTextNode = document.createTextNode(taskText);
        listItem.appendChild(taskTextNode);

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add click event to remove task
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Append button to li, and li to ul
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
