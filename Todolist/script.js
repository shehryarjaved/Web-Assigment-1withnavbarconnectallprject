function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `<span>${taskInput.value}</span>`;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "&#x2716;";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.onclick = function (event) {
        taskList.removeChild(event.target.parentElement);
      };
  
      const updateBtn = document.createElement("button");
      updateBtn.innerHTML = "&#9998;";
      updateBtn.classList.add("updateBtn");
      updateBtn.onclick = function (event) {
        const taskText = event.target.parentElement.querySelector('span');
        const updatedTask = prompt("Update task:", taskText.innerText);
        if (updatedTask !== null && updatedTask !== "") {
          taskText.innerText = updatedTask;
        }
      };
  
      newTask.appendChild(deleteBtn);
      newTask.appendChild(updateBtn);
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function taskAction(event) {
    if (event.target.tagName === "SPAN") {
      event.target.classList.toggle("completed");
    }
  }
  