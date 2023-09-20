document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Add delete functionality
            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    }

    // Add task when clicking the "Add" button
    addTaskButton.addEventListener("click", addTask);

    // Add task when pressing Enter key
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
