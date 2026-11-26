import { createInterface } from 'node:readline/promises';

export const input = createInterface({
    input: process.stdin,
    output: process.stdout
});