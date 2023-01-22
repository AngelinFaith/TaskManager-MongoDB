import express from "express";
import {getAllTasks, getSingleTask, createTask, updateTask, deleteTask} from "../controllers/tasksController.js"
const router = express.Router();


// Getting all tasks.
// http://localhost:5000/api/v1/tasks
// get()
// As we defined /api/v1/tasks as base url of routes in use(), here / denotes to http://localhost:5000/api/v1/tasks.
router.get("/", getAllTasks);

// Get single task.
// http://localhost:5000/api/v1/tasks/:id
router.get("/:id", getSingleTask);

//Create task.
// http://localhost:5000/api/v1/tasks
router.post("/", createTask);

// Update task.
// http://localhost:5000/api/v1/tasks/:id
router.put("/:id", updateTask);

//Delete task.
// http://localhost:5000/api/v1/tasks/:id
router.delete("/:id", deleteTask);

export default router;