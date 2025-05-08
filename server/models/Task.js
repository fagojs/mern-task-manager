const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date},
    status: {
        type: String,
        enum: ["pending", "in-progress", "done"],
        default: "pending"
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})