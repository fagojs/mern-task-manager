const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User")

router.post("/register", async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        })
        const savedUser = await newUser.save();

        res.status(201).json({message: "User registered successfully", 
            user: {
            id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
        },
    });
    } catch (error) {
        res.status(400).json({message:"Server error", error: error.message});
    }
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message: "Invalid password"});
        }
    
        const token = jwt.sign(
            {id: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );
    
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
        });        
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
});

module.exports = router;