import Tasks from "../models/tasksModel.js";

// Get all the tasks.
export const getAllTasks = (req, res)=>{
    res.status(200).send("<h2>Get all tasks</h2>");
}

export const getSingleTask = (req, res)=>{
    res.status(200).send("<h2>Get single tasks</h2>");
}

export const createTask = async (req, res)=>{
    // we get the created task as object from req.body, thus store the created task and send it as document fields 
    const taskData = req.body;
    console.log(taskData);
    // Using models only, we send the data to the database. Data is send as document fields. 
    const newTaskData = new Tasks(taskData);
    try{
        await newTaskData.save();
        res.status(201).json({success: true, data: newTaskData, msg:"Task created successfully"});
    } catch(error){
        res.status(400).json({success: false, msg: error});
    }
}

export const updateTask = (req, res)=>{
    res.status(200).send("<h2>Update task</h2>");
}

export const deleteTask = (req, res)=>{
    res.status(200).send("<h2>Delete task</h2>");
}