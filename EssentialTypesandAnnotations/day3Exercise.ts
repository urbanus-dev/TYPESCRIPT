
// Exercise 1: Destructuring a Discriminated Union
import { Expect, Equal } from '@total-typescript/helpers'
type Circle = {
    kind: 'circle';
    radius: number;
};

type Square = {
    kind: 'square';
    sideLength: number;
};

type Shape = Circle | Square;
function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
}


// Exercise 2: Narrowing a Discriminated Union with a Switch Statement
function calculateArea2(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius
        case "square":
            return shape.sideLength * shape.sideLength
        default:
            throw new Error("Unknown shape type");
    }
}



// Exercise 3: Discriminated Tuples
type User = {
    id: number;
    name: string;
    email: string;
};
type APIResponse = ['error', string] | ['success', User[]]
async function fetchData(): Promise<APIResponse> {
    try {
        const response = await fetch('https://api.example.com/data');

        if (!response.ok) {
            return ['error', 'An error occurred'];
        }

        const data: User[] = await response.json();

        return ['success', data];
    } catch (error) {
        return ['error', 'An error occurred'];
    }
}
async function exampleFunc() {
    const [status, value] = await fetchData();

    if (status === 'success') {
        console.log(value);


        type test = Expect<Equal<typeof value, User[]>>;
    } else {
        console.error(value);

        type test = Expect<Equal<typeof value, string>>;
    }
}

//   Exercise 4: Handling Defaults with a Discriminated Union
type OptionalCircle = {
    radius: number
}
type Shape1 = Circle | OptionalCircle | Square;

export function calculateArea1(shape: Shape1) {
    if ('kind' in shape && shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    } if (!('kind' in shape)) {
        return Math.PI * shape.radius * shape.radius;
    } return shape.sideLength * shape.sideLength;
}