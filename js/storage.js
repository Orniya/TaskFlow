// local storage is abt storing data in our browser on our device
// this moduke has 2 main tasks : 
// 1. save tasks: task objects -> convert to json -> save in local storage
// 2. load tasks: read from local storage -> parse json -> get task object

// our tasks a collection of objects in an array


function saveTasks(tasks){
   localStorage.setItem("tasks", JSON.stringify(tasks));
  


}

function loadTasks(key){
    const savedTasks = localStorage.getItem(key);

    if( savedTasks === null){

        return [];
    } else {
        const retrievedTasks =  JSON.parse(savedTasks);
        return retrievedTasks;

    }
    
}


 export {
     saveTasks,
    loadTasks

 }