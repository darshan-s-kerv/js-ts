const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    c: new Date(),
    // d: function() {
    //     console.log('Hello');
    // },
    h: new Map([[1, 'one'], [2, 'two']]),
    i: new Set([1, 2, 3]),
}

console.log(obj1);

console.log("Structured Clone");
console.log(structuredClone(obj1));

console.log("JSON Parse/Stringify");
console.log(JSON.parse(JSON.stringify(obj1)));

console.log("Manual Deep Clone");

function deepCloneObject(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        clone[key] = deepCloneObject(obj[key]);
    }

    return clone;
}

console.log(deepCloneObject(obj1));