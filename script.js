
document.addEventListener('DOMContentLoaded', function() {

    const taskInput = document.getElementById('task-input'); // The input field for new tasks
    const addTaskBtn = document.getElementById('add-task-btn'); // The "Add Task" button
    const taskList = document.getElementById('task-list'); // The unordered list where tasks will be displayed

    // Step 3: Create the addTask Function
    /**
     * @function addTask
     * @description Handles the logic for adding a new task to the To-Do list.
     * It retrieves the task text, validates it, creates new list item and
     * remove button elements, appends them to the DOM, and clears the input field.
     */
    function addTask() {
        // Retrieve the current value from the task input field and remove
        // any leading or trailing whitespace using .trim().
        const taskText = taskInput.value.trim();

        // Check if the taskText is empty.
        // If it is, alert the user to enter a task.
        // (Note: In a more robust application, you might use a custom modal
        // or a div for feedback instead of `alert()` for a better user experience.)
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Exit the function if the input is empty
        }

        // If taskText is not empty, proceed with creating the task elements.

        // Create a new <li> element to represent a single task item.
        const listItem = document.createElement('li');
        // Set the text content of the <li> directly to the task text entered by the user.
        // This aligns with the task's requirement.
        listItem.textContent = taskText;

        // Create a new <button> element for removing the task.
        const removeButton = document.createElement('button');
        // Set the text content of the remove button.
        removeButton.textContent = 'Remove';
        // Add the CSS class 'remove-btn' to style the button.
        removeButton.className = 'remove-btn';

        // Assign an onclick event listener to the remove button.
        // When this button is clicked, it will remove its parent element (the <li>).
        // `this` inside the event listener refers to the button itself.
        // `this.parentNode` refers to the <li> element that contains the button.
        // `removeChild()` is then called on the taskList (the <ul>) to remove the <li>.
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li> element.
        // This makes the button a child of the task list item.
        listItem.appendChild(removeButton);

        // Append the completed <li> element (which now contains the task text and remove button)
        // to the <ul> (taskList). This adds the new task to the visible list on the webpage.
        taskList.appendChild(listItem);

        // Clear the task input field after adding the task, ready for the next entry.
        taskInput.value = '';
    }

    // Step 4: Attach Event Listeners

    // Add a click event listener to the "Add Task" button.
    // When the button is clicked, the addTask function will be executed.
    addTaskBtn.addEventListener('click', addTask);

    // Add a keypress event listener to the task input field.
    // This allows users to add tasks by pressing the "Enter" key.
    taskInput.addEventListener('keypress', function(event) {
        // Check if the key pressed is the 'Enter' key.
        if (event.key === 'Enter') {
            // If 'Enter' is pressed, call the addTask function.
            addTask();
        }
    });

});
