
//Exercise 1: Basic Types with Function Parameters
import { Expect, Equal } from "@total-typescript/helpers";
export const add = (a: number, b: number) => {
    return a + b;
};
const result = add(1, 2);
console.log(result);
type test = Expect<Equal<typeof result, number>>;

// Exercise 2: Annotating Empty Parameters
const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(" ");
};
const result1 = concatTwoStrings("Hello", "World");
type test1 = Expect<Equal<typeof result1, string>>;

// Exercise 3: The Basic Types
export let example1: string = "Hello World!";
export let example2: string = "42";
export let example3: boolean = true;
export let example4: symbol = Symbol();
export let example5: bigint = 123n;

// Exercise 4: The any Type
export const handleFormData = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());

    return value;
};


//Exercise 6: Optional Property Types
const concatName = (user: { first: string; last?: string }) => {
    if (!user.last) {
      return user.first;
    }
  
    return `${user.first} ${user.last}`;
  };
  const result3 = concatName({
      first: "John",
    });