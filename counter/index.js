export function createCounter(start) {
    let count = start;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        reset() {
            count = start;
        },
        getValue() {
            return count;
        }
    };
}