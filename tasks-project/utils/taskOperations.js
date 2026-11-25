import { tasks } from "../data/index.js";
import { input } from "./input.js";

export async function createTask() {
    const name  = await input.question('Enter task name: ');
    const description = await input.question('Enter task description: ');
    const status = await input.question('Enter task status (complete/pending): ');
    tasks.push({
        id: tasks.length + 1,
        title: name,
        description: description,
        status: status
    });
    console.log(`Task created: ${name}, ${description}, ${status}`);
}

export function listTasks() {
    console.table(tasks);
}

export async function listTasksByStatus() {
    const statusFilter = await input.question('Enter status to filter by (complete/pending): ');
    const filteredTasks = tasks.filter(task => task.status === statusFilter);
    console.table(filteredTasks);
}

export async function viewTaskById() {
    const id = await input.question('Enter task ID: ');
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
        console.table([task]);
    } else {
        console.error(`Task with ID ${id} not found.`);
    }
}

export async function updateTask() {
    const updateId = await input.question('Enter task ID to update: ');
    const taskToUpdate = tasks.find(task => task.id === parseInt(updateId));
    if (taskToUpdate) {
        console.table([taskToUpdate]);
        const newName = await input.question('Enter new task name: ');
        const newDescription = await input.question('Enter new task description: ');
        const newStatus = await input.question('Enter new task status (complete/pending): ');
        taskToUpdate.title = newName;
        taskToUpdate.description = newDescription;
        taskToUpdate.status = newStatus;
        console.log(`Task updated`);
    } else {
        console.error(`Task with ID ${updateId} not found.`);
    }
}

export async function deleteTask() {
    const deleteId = await input.question('Enter task ID to delete: ');
    const index = tasks.find(task => task.id === parseInt(deleteId));
    if (index) {
        tasks.splice(tasks.indexOf(index), 1);
        console.log(`Task deleted`);
    } else {
        console.error(`Task with ID ${deleteId} not found.`);
    }
}