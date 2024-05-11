const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  // console.log(taskText);
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    // console.log(tasks);
    displayTasks();
  }
  // console.log(tasks);
}

function displayTasks() {
  // console.log(tasks);
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? "checked" : ""
    }>
    <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  displayTasks();
}

addButton.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();
