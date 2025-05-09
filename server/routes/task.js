const express = require("express");

const auth = require("../middleware/auth");

const router = express.Router();

const {getAllTasks, createTask, updateTask, deleteTask} = require("../controllers/taskController");

router.get("/", auth, getAllTasks);

router.post("/add", auth, createTask);

router.put("/update/:id", auth, updateTask);

router.delete("/delete/:id", auth, deleteTask);

module.exports = router;