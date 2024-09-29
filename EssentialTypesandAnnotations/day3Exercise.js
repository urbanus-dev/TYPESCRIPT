"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateArea1 = calculateArea1;
function calculateArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
}
// Exercise 2: Narrowing a Discriminated Union with a Switch Statement
function calculateArea2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLength * shape.sideLength;
        default:
            throw new Error("Unknown shape type");
    }
}
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            return ['error', 'An error occurred'];
        }
        const data = await response.json();
        return ['success', data];
    }
    catch (error) {
        return ['error', 'An error occurred'];
    }
}
async function exampleFunc() {
    const [status, value] = await fetchData();
    if (status === 'success') {
        console.log(value);
    }
    else {
        console.error(value);
    }
}
function calculateArea1(shape) {
    if ('kind' in shape && shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    if (!('kind' in shape)) {
        return Math.PI * shape.radius * shape.radius;
    }
    return shape.sideLength * shape.sideLength;
}
