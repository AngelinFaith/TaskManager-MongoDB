import mongoose from "mongoose";

// Define the fieldtype of properties of document here
const taskSchema = mongoose.Schema({
    username: String,
    completed: Boolean
});

// Then create a model for that scheme and store it a variable and export it.
// model(modelName, schemaName);
const Tasks= mongoose.model("tasks", taskSchema);

export default Tasks;