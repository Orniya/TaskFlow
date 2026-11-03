// Genrating a unique ID

function generateId(loadedTasks){

     let nextId;

     if(loadedTasks.length === 0){
          nextId = 1;

     } else {

          let indexList = loadedTasks.map(task => task.id)
          let maxIndex = Math.max(...indexList);
          nextId = maxIndex + 1;
     }

     
     return nextId;
}


// Creating a Task    
function createTask(taskTitle, taskDescription, taskPriority,loadedTasks){
    return {
     id : generateId(loadedTasks),
     title : taskTitle,
     description : taskDescription,
     priority : taskPriority,
     completed : false
    } 
};




// updating task
function updateTask(task,updates){
     const updatedTasks ={ ...task, ...updates};
     return updatedTasks;

};


// deleting tasks
function deleteTask(tasks,taskId){
    let tasksAfterDeletion = tasks.filter((task) =>{
          return task.id !==taskId;
     }); 

     return tasksAfterDeletion;

};



// completion toggle function:
function toggleTaskComplete(task){
     const objAfterToggle = {...task, completed : !task.completed}
     return objAfterToggle;
      

};




// retrieve tasks:
function getTaskById(tasks, taskId){

     
     const chosenTask = tasks.find((task) => {
          return task.id === taskId;
     });

     
          return chosenTask;
};




export {
     generateId,
     createTask,
     updateTask,
     deleteTask,
     toggleTaskComplete,
     getTaskById

}


