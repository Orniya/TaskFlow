
function validateTitle(title){

    if(typeof title === 'string'){
         const trimmedTitle = title.trim();

         if(trimmedTitle.length < 3 ){
            return "invalid input";
        } else{
            return trimmedTitle;
        };
          
         
    } else {
        return "invalid input"
    }

};



function validatePriority(priority){

    const validPriorities = ["high", "medium", "low"];

    if (typeof priority !== 'string'){
        return "invalid input";
    } else {

        const lowerPriority = priority.trim().toLowerCase();

        
         if ( validPriorities.includes(lowerPriority)){
        return lowerPriority;
    } else {
        return "invalid input"
    }


}
}



function validateDescription(description){
    if(typeof description !== 'string'){
        return "invalid input";
    } else {
        const trimmedDescription = description.trim();
        
            return trimmedDescription;
        
    }

};



function validateTask(title, description, priority){

    const vtitle = validateTitle(title);
    const vdescription = validateDescription(description);
    const vpriority = validatePriority(priority);


    if(vtitle === "invalid input" || vdescription === "invalid input" || vpriority === "invalid input"){
        return "invalid input, please try again"
    } else {
        return {
        title: vtitle,
        description: vdescription,
        priority : vpriority
    }

    }



}


export {
    validateTitle,
    validateDescription,
    validatePriority,
    validateTask

};