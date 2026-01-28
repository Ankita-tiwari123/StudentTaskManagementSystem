const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;
const FILE = "tasks.json";

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Get all tasks
app.get("/tasks", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
    res.json(data);
});

// Add task
app.post("/tasks", (req, res) => {
    const { studentId, studentName, task } = req.body;

    if (!studentId || !studentName || !task) {
        return res.status(400).json({ error: "All fields required" });
    }

    const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

    const newTask = {
        id: Date.now(),
        studentId,
        studentName,
        task
    };

    data.push(newTask);
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

    res.json({ success: true });
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    let data = JSON.parse(fs.readFileSync(FILE, "utf-8"));

    data = data.filter(t => t.id !== id);
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
