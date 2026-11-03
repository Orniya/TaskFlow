// order:
// Imports
// Load tasks (loadedTasks)
// DOM selections
// Application logic functions
// DOM functions (rendering, updating statistics, etc.)
// Event listeners
// Exports

import {
  createTask,
  updateTask,
  deleteTask,
  toggleTaskComplete,
  getTaskById,
} from "./task.js";

import { validateTask } from "./validation.js";

import { saveTasks, loadTasks } from "./storage.js";

let loadedTasks = loadTasks("tasks");

const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskPriorityInput = document.querySelector("#task-priority");
const taskList = document.querySelector("#task-list");
const filterButtons = document.querySelector("#filter-buttons");
const searchInput = document.querySelector("#search-input");

function createTaskWholeProcess(title, description, priority) {
  const validateTaskVariable = validateTask(title, description, priority);

  if (validateTaskVariable !== "invalid input, please try again") {
    const newTask = createTask(
      validateTaskVariable.title,
      validateTaskVariable.description,
      validateTaskVariable.priority,
      loadedTasks,
    );
    loadedTasks.push(newTask);
    saveTasks(loadedTasks);

    return loadedTasks;
  } else {
    return  "Invalid task data. Please try again.";
  }
}

function updateTaskWholeProcess(taskID, newTask) {
  let taskToUpdate = getTaskById(loadedTasks, taskID);

  if (typeof taskToUpdate !== "undefined") {
    const validateTaskVariable = validateTask(
      newTask.title,
      newTask.description,
      newTask.priority,
    );

    if (validateTaskVariable !== "invalid input, please try again") {
      const updatedTask = updateTask(taskToUpdate, validateTaskVariable);

      const index = loadedTasks.findIndex((task) => {
        return task.id === taskID;
      });

      loadedTasks[index] = updatedTask;

      saveTasks(loadedTasks);
      return loadedTasks;
    } else {
      return "error occured";
    }
  } else {
    return "task doesn't exist";
  }
}

function deleteTaskWholeProcess(taskId) {
  const taskToDelete = getTaskById(loadedTasks, taskId);

  if (typeof taskToDelete !== "undefined") {
    const tasksAfterDeletion = deleteTask(loadedTasks, taskId);

    loadedTasks = tasksAfterDeletion;

    saveTasks(loadedTasks);

    return loadedTasks;
  } else {
    return " Task Doesn't Exist";
  }
}

function toggleTaskWholeProcess(taskId) {
  const taskToToggle = getTaskById(loadedTasks, taskId);

  if (typeof taskToToggle !== "undefined") {
    const taskAfterToggle = toggleTaskComplete(taskToToggle);

    const index = loadedTasks.findIndex((task) => {
      return task.id === taskId;
    });

    loadedTasks[index] = taskAfterToggle;

    saveTasks(loadedTasks);

    return loadedTasks;
  } else {
    return " Task Doesn't Exist";
  }
}

function searchTasks(taskToSearch) {
  const searchResults = loadedTasks.filter((task) => {
    return task.title.toLowerCase().includes(taskToSearch.toLowerCase());
  });

  return searchResults;
}

function filterTasks(filterType) {
  if (filterType === "all") {
    return loadedTasks;
  } else if (filterType === "pending") {
    const pendingTasks = loadedTasks.filter((task) => {
      return task.completed === false;
    });
    return pendingTasks;
  } else if (filterType === "completed") {
    const completedTasks = loadedTasks.filter((task) => {
      return task.completed === true;
    });

    return completedTasks;
  } else {
    return "invalid input";
  }
}

function getTaskStatistics() {

    const totalTasksCount = loadedTasks.length;

    const pendingTasksCount =  loadedTasks.filter((task) => {
      return task.completed === false;
    }).length;

    const completedTasksCount = loadedTasks.filter((task) => {
      return task.completed === true;
    }).length;

    return {
    total: totalTasksCount,
    completed: completedTasksCount,
    pending: pendingTasksCount
};

};

// dommmmmm

function renderTasks(tasksToRender){
 

  taskList.innerHTML= "";

  for(const task of tasksToRender){
     const div = document.createElement("div");
     div.classList.add("task-item")
     taskList.append(div);


     const heading = document.createElement("h3");
     heading.classList.add("titleHeading")
     heading.textContent =task.title;
     div.append(heading);
     

     const paragraph = document.createElement("p");
     paragraph.textContent = task.description;
      paragraph.classList.add("descriptionParagraph")
     div.append(paragraph);

     const paragraph1 = document.createElement("p");
     paragraph1.classList.add("priorityParagraph")
     paragraph1.textContent =task.priority;
     div.append(paragraph1);    

     const paragraph2 = document.createElement("p");
     paragraph2.classList.add("completionParagraph");
     if(task.completed){
      paragraph2.textContent ="Completed";
     }else {
      paragraph2.textContent = "Pending"
     }
     div.append(paragraph2)

     const MarkAsCompleteButton = document.createElement("button");
     MarkAsCompleteButton.textContent ="Mark as Complete";
     MarkAsCompleteButton.classList.add("completion-btn");
     div.append(MarkAsCompleteButton);

     MarkAsCompleteButton.dataset.id= task.id; //dataset.id creates data-id attribute dynamically | task.id: id



  }

}


taskForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  console.log("Form Submitted");

  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const priority = taskPriorityInput.value;

  const createdTask=createTaskWholeProcess(title,description,priority);
  console.log(createdTask);

  renderTasks(loadedTasks)


});

filterButtons.addEventListener("click", (event)=>{
 if (!event.target.dataset.filter) return;

 const filterType = event.target.dataset.filter;
 console.log(filterType);

 const filtered = filterTasks(filterType);
 renderTasks(filtered);
})


searchInput.addEventListener("input", ()=>{
  const taskToSearch = searchInput.value;
  const SearchResults = searchTasks(taskToSearch);
  
  console.log(SearchResults);
  renderTasks(SearchResults);

});

taskList.addEventListener("click",(event)=>{
  if(!event.target.classList.contains("completion-btn")) return;

  const clickedTaskId = event.target.dataset.id;

  toggleTaskWholeProcess(Number(clickedTaskId)); //we use number because dataset values are strings but this function expects a number

  renderTasks(loadedTasks);


  

})


renderTasks(loadedTasks);

export {
  createTaskWholeProcess,
  updateTaskWholeProcess,
  deleteTaskWholeProcess,
  toggleTaskWholeProcess,
  searchTasks,
  filterTasks,
  getTaskStatistics,
};
