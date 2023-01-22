import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import mongoose, { mongo } from "mongoose";
// import the dotenv to get access to dotenv, then call the config() to import the configurations we stored in .env file using "process" keyword.
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
// To send data as form-data.
app.use(express.urlencoded({extended: false}));
// To send the data as json.
app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);
app.get("/", (req, res)=>{
    res.status(200).send("<h2>Task Manager</h2>");
})

// To connect DB with the application using connection string, use "mongoose.connect()". 
// This method is a promise method has resolve and reject. Resolve code is in then block and reject should be in catch()
// mongoose.connect()accepts two parameters: connection string an connection options.
// Only connection string is mandatory.But these options are added to avoid some errors that caused by mongoDB.
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`server is running in : http://localhost:${PORT}`)))
.catch((err) => console.log(`Can't able to connect: ${err}`));