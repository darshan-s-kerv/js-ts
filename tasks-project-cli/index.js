import { options } from './data/index.js';
import { input } from './utils/input.js';
import { createTask, deleteTask, listTasks, listTasksByStatus, updateTask, viewTaskById } from './utils/taskOperations.js';

function printOptions() {
    for (const [key, value] of Object.entries(options)) {
        console.log(`${key}. ${value}`);
    }
}

async function executeOption(option) {
    switch (option) {
        case "1":
            await createTask();
            break;
        case "2":
            listTasks();
            break;
        case "3":
            await listTasksByStatus();
            break;
        case "4":
            await viewTaskById();
            break;
        case "5":
            await updateTask();
            break;
        case "6":
            await deleteTask();
            break;
        case "7":
            console.log("Exiting...");
            input.close();
            process.exit(0);
        default:
            console.error("Invalid option selected.");
    }
}

while(true) {
    printOptions();
    const option = await input.question('Select an option: ');
    console.log(`\nYou selected option ${option}: ${options[option]}`);
    await executeOption(option);
    console.log();
}
