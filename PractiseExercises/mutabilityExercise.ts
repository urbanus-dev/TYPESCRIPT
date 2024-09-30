// Exercise 1: Inference with an Array of Objects
type ButtonAttributes = {
    type: "button" | "submit" | "reset";
};

const modifyButtons = (attributes: ButtonAttributes[]) => { };

const buttonsToChange: ButtonAttributes[] = [
    {
        type: "button",
    },
    {
        type: "submit",
    },
];

modifyButtons(buttonsToChange);


// Exercise 2: Avoiding Array Mutation
function printNames(names: readonly string[]) {
    for (const name of names) {
        console.log(name);
    }

    // @ts-expect-error
    names.push("John");

    // @ts-expect-error 
    names[0] = "Billy";
}


// Exercise 3: An Unsafe Tuple
const dangerousFunction = (arrayOfNumbers: number[]) => {
    arrayOfNumbers.pop();
    arrayOfNumbers.pop();
};
type Coordinate = readonly [number, number];
const myHouse: Coordinate = [0, 0];
dangerousFunction(
    // @ts-expect-error
    myHouse,
);