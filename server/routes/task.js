const express = require("express");

const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

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
})