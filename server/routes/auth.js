const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", (req, res) => {
    
    // extract user data from request body

    // Hash the password
    // create new user in the database
    // save user to the database


});

router.post("/login", (req, res) => {
    // extract user data from request body
 
    // verify the password
    // if password is correct, send success response with jwt token
});