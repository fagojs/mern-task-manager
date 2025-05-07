const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./database/connection");
const userRoutes = require("./routes/auth");

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/user", userRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running at PORT: ${PORT}`);
});

connectDB()