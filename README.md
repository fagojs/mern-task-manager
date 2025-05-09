# MERN Task Manager

A secure task management REST API built using the **MERN stack** (MongoDB, Express, React, Node.js). The backend handles user registration, authentication (JWT), and task CRUD operations. Frontend part is in-progress.

---

## Project Overview

The MERN Task Manager is designed to help users manage their tasks efficiently. It includes:

- JWT Authentication (Register/Login)
- User-based Task Ownership
- Create, Read, Update, Delete (CRUD) Tasks
- Modular Code Structure
- Protected Routes Middleware

---

## Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/fagojs/mern-task-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-task-manager
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Start the server:

   ```bash
   npm run dev
   ```

6. Frontend: In-Progress.

---

## Running the Application

- **Backend**: The server runs on `http://localhost:5000` by default.
- **Frontend**: In-Progress.

---

## API Endpoints

### **Authentication**

- `POST /user/register`: Register a new user.
- `POST /user/login`: Authenticate user.

### **Tasks**

- `GET /tasks`: Get all tasks for the logged-in user.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task (ownership validation required).
- `DELETE /tasks/:id`: Delete a task (ownership validation required).

---

## Technologies Used

### **Backend**

- **Framework**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: bcryptjs, jsonwebtoken
- **Dev Tools**: Nodemon, dotenv, Postman

### **Frontend**

- In-Progress

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
