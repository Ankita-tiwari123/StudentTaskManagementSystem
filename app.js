const API_URL = "http://localhost:3000/tasks";

window.onload = fetchTasks;

// Fetch and display tasks
function fetchTasks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(tasks => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach(t => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${t.studentName}</strong> (${t.studentId})<br>
                    Task: ${t.task}
                `;

                const btn = document.createElement("button");
                btn.textContent = "Delete";
                btn.onclick = () => deleteTask(t.id);

                li.appendChild(btn);
                list.appendChild(li);
            });
        });
}

// Add task
function addTask() {
    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const task = document.getElementById("taskInput").value.trim();

    if (!studentId || !studentName || !task) {
        alert("All fields are required");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, studentName, task })
    })
    .then(() => {
        document.getElementById("studentId").value = "";
        document.getElementById("studentName").value = "";
        document.getElementById("taskInput").value = "";
        fetchTasks();
    });
}

// Delete task
function deleteTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => fetchTasks());
}
