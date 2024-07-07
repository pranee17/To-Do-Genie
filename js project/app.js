document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.querySelector("#addTaskBtn");
    const taskList = document.querySelector("#taskList");
    const taskInput = document.querySelector("#taskInput");

    addTaskBtn.addEventListener("click", function() {
        const taskValue = taskInput.value;
        if (taskValue.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `${taskValue} <button class="completeBtn">Mark as Completed</button> <button class="delBtn">Delete</button>`;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delBtn")) {
            const taskItem = event.target.parentElement;
            taskItem.remove();
        } else if (event.target.classList.contains("completeBtn")) {
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle("complete");
        }
    });
});
