# TaskFlow 
A simple and interactive task management application built with **HTML, CSS, and Vanilla JavaScript**. TaskFlow allows users to create, manage, search, filter, and track their daily tasks.

## ✨ Features

* **Create Tasks:** Add tasks with a title, description, and priority.
* **View Tasks:** Display all saved tasks dynamically.
* **Edit Tasks:** Update existing task information.
* **Delete Tasks:** Remove tasks when they are no longer needed.
* **Mark as Complete:** Toggle tasks between completed and pending.
* **Search Tasks:** Find tasks by their titles.
* **Filter Tasks:** View all, completed, or pending tasks.
* **Task Statistics:** Track the total number of tasks, completed tasks, and pending tasks.
* **Local Storage:** Automatically save tasks in the browser so they remain available after refreshing the page.
* **Input Validation:** Validate task information before creating or updating tasks.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Browser Local Storage

## 📁 Project Structure

```text
TaskFlow/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── task.js
    ├── storage.js
    └── validation.js
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd TaskFlow
```

### 3. Run the Application

Open the project in Visual Studio Code and use the **Live Server** extension to launch `index.html` in your browser.

## 💡 How It Works

TaskFlow is organized into separate JavaScript modules, with each module responsible for a specific part of the application.

| File            | Responsibility                                                         |
| --------------- | ---------------------------------------------------------------------- |
| `task.js`       | Handles task creation, updating, deletion, completion, and retrieval.  |
| `validation.js` | Validates task data before processing.                                 |
| `storage.js`    | Handles saving and loading tasks using Local Storage.                  |
| `app.js`        | Connects application logic with the DOM and handles user interactions. |

## 💾 Data Persistence

TaskFlow uses the browser's **Local Storage API** to store task information.

Tasks are saved as JSON data and loaded when the application starts. This allows users to retain their tasks even after refreshing or reopening the browser.

**Note:** Tasks are stored locally in the browser and are not synchronized across devices.

## 🎯 Project Purpose

This project was developed to practice and strengthen JavaScript fundamentals, including:

* Functions and arrays
* Objects and array methods
* ES6 modules and imports/exports
* DOM manipulation
* Event handling and event delegation
* Form handling and validation
* Local Storage
* Application logic organization

---

**Built with JavaScript ❤️**


