const express = require("express");

const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res)=> {
    try {
        const allTasks = await Task.find({user: req.user.id}).sort({ createdAt: -1 });
        res.status(200).json({message: "Task retrieved successfully", tasks: allTasks});
    } catch (error) {
        res.status(401).json({message: "Server error", error: error.message});
    }
});

router.post("/add", auth, async (req, res) => {
    const {title, description, dueDate, status} = req.body;

    try {
        const newTask = new Task({
            title: title,
            description: description,
            dueDate: dueDate,
            status: status,
            user: req.user.id
        });

        const savedTask = await newTask.save();
        res.status(201).json({
            message: "New task added successfully",
            task: savedTask,
        });
    } catch (error) {
        res.status(400).json({message: "Server error", error: error.message});
    }
});

router.put("/update/:id", auth, async (req, res)=>{
    const {id} = req.params;
    const {newTitle, newDescription, newDueDate, newStatus} = req.body;

    try {
        const task = await Task.findById({_id: id});

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to update this task" });
        }
        task.title = newTitle || task.title;
        task.description = newDescription || task.description;
        task.dueDate = newDueDate || task.dueDate;
        task.status = newStatus || task.status;

        const updatedTask = await task.save()
        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask,
        });
    } catch (error) {
        res.status(401).json({ message: "Server error", error: error.message });
    }
})

module.exports = router;