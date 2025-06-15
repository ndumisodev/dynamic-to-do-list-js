// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create <li> and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Required by test

        // On click, remove task
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to list item, then list item to list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // ✅ Add task on Enter key press using 'keypress' (test requirement)
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
