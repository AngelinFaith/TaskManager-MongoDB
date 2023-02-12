import Tasks from "../models/tasksModel.js";

// Get all the tasks.
export const getAllTasks =async(req, res)=>{
    try{
        const tasks = await Tasks.find(); // find() returns the array of all the tasks stored in the database.
        res.status(200).json({success: true, data: tasks, msg:"All the task fetched successfully"});
    } catch(error){
        res.status(400).json({success: false, msg: error});
    }
}

export const getSingleTask = async(req, res)=>{
    const {id} = req.params;
    try{
        const singleTask = await Tasks.findById(id);
        res.status(200).json({success: true, data: singleTask, msg:`Task with id: ${id} is fetched successfully`});
    } catch(error){
        res.status(400).json({success: false, msg: error});
    }
}

// In backend all the operation is created as an async function.
export const createTask = async (req, res)=>{
    // we get the created task as object from req.body, thus store the created task and send it as document fields.
    // Uisng req.body we can get the user entered information from the frontend 
    const taskData = req.body;
    console.log(taskData); // {username: "Faith", completed: true}
    // Here the data passed inside the model is created as an object with the unique id.Then need to store this data in DB.
    // Here the created object is referred as a document fields that needs to form a collection.
    const newTaskData = new Tasks(taskData);
    try{
        // This .save() will store the created object as a document into collection which we have created.
        await newTaskData.save();
        res.status(201).json({success: true, data: newTaskData, msg:"Task created successfully"});
    } catch(error){
        res.status(400).json({success: false, msg: error});
    }
}
 
// Need to fetch the data from DB by id and apply the updated details. 
export const updateTask = async(req, res)=>{
    const {id} = req.params;
    const updatedData = req.body;
    try{
        // In task we have a data fetched from DB using the id.
        const updatedTask = await Tasks.findByIdAndUpdate(id, {...updatedData, id},{new: true});
        res.status(201).json({success: true, data: updatedTask, msg:`Task with id: ${id} is updated successfully`});
    } catch(error){
        res.status(400).json({success: false, msg: error});
    }
}

export const deleteTask = async(req, res)=>{
    const {id} = req.params;
    try{
        // In task we have a data fetched from DB using the id.
        const deletedTask = await Tasks.findByIdAndDelete(id);
        res.status(201).json({success: true, data: deletedTask, msg:`Task with id: ${id} is deleted successfully`});
    } catch(error){
        res.status(400).json({success: false, msg: error});
    }
}