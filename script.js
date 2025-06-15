// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input value

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create <li> element and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Use classList.add as required

        // Set onclick handler to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the button to the list item
        listItem.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
