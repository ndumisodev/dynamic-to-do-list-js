// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    // Function to add a task (with optional saving)
    function addTask(taskText, save = true) {
        // If triggered by user input, trim and validate
        if (save) {
            taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }
        }

        // Create list item and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create and configure Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Add click event to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };

        // Append button and list item
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Save task to local storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
            taskInput.value = ''; // Clear input after adding
        }
    }

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add task on button click
    addButton.addEventListener('click', () => addTask());

    // Add task on 'Enter' key press (keypress event required)
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});











































// // Wait for the DOM to fully load
// document.addEventListener('DOMContentLoaded', function () {
//     // Select DOM elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Function to add a new task
//     function addTask() {
//         const taskText = taskInput.value.trim(); // Trim input

//         // Alert if input is empty
//         if (taskText === '') {
//             alert('Please enter a task!');
//             return;
//         }

//         // Create <li> and set its textContent
//         const listItem = document.createElement('li');
//         listItem.textContent = taskText;

//         // Create Remove button
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         removeBtn.classList.add('remove-btn'); 
//         removeBtn.onclick = function () {
//             taskList.removeChild(listItem);
//         };

//         listItem.appendChild(removeBtn);
//         taskList.appendChild(listItem);

//         taskInput.value = '';
//     }

//     addButton.addEventListener('click', addTask);

//     taskInput.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             addTask();
//         }
//     });
// });
