📚 Student Task Management System (Homework Tracker)

A simple Full Stack Web Application built using Node.js, Express, HTML, CSS, and JavaScript to manage homework tasks for students.
This project demonstrates CRUD operations using a REST API and JSON file storage.

🚀 Features

Add homework tasks for students

View all student tasks without page refresh (SPA behavior)

Delete tasks

Store data persistently using a local JSON file

Simple and clean UI

🛠️ Tech Stack
Frontend

HTML

CSS

JavaScript (Fetch API)

Backend

Node.js

Express.js

Storage

JSON file (tasks.json)

📂 Project Folder Structure
StudentTaskManagerProject
│
├── server.js
├── tasks.json
├── package.json
├── package-lock.json
│
├── public
│   ├── index.html
│   ├── app.js
│   └── style.css
│
└── node_modules

📦 API Endpoints
➤ Get All Tasks
GET /tasks

➤ Add Task
POST /tasks


Request Body

{
  "studentId": "CS101",
  "studentName": "Amit",
  "task": "DBMS Assignment"
}

➤ Delete Task
DELETE /tasks/:id

🧾 Data Format (tasks.json)
[
  {
    "id": 1769584472865,
    "studentId": "CS101",
    "studentName": "Amit",
    "task": "DBMS Assignment"
  }
]



3️⃣ Install dependencies
npm install
