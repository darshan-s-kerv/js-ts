export const options = {
    "1": "Create new task",
    "2": "List all tasks",
    "3": "List tasks by status",
    "4": "View task by ID",
    "5": "Update task",
    "6": "Delete task",
    "7": "Exit"
}

function createTask(id, title, description, status = 'pending') {
    return {
        id,
        title,
        description,
        status,

        complete() {
            this.status = 'completed';
        }
    };
}

export const tasks = [
    createTask(1, 'SQL', 'Learn SQL for database management', 'complete'),
    createTask(2, 'C#', 'Learn C# for application development', 'completed'),
    createTask(3, 'Git', 'Learn Git for version control', 'completed'),
    createTask(4, 'Azure', 'Learn Azure for deployment and cloud services', 'completed'),
    createTask(5, 'JavaScript', 'Learn JavaScript for web development', 'pending'),
    createTask(6, 'TypeScript', 'Learn TypeScript for type safety in JavaScript', 'pending'),
    createTask(7, 'React', 'Learn React for building user interfaces', 'pending')
];