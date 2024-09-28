"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const day1Exercise_1 = require("./day1Exercise");
const jsdom_1 = require("jsdom");
const day3Exercise_1 = require("./day3Exercise");
const { document } = new jsdom_1.JSDOM().window;
(0, vitest_1.it)("Should handle a form submit", () => {
    const form = document.createElement("form");
    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;
    form.onsubmit = (e) => {
        const value = (0, day1Exercise_1.handleFormData)(e);
        (0, vitest_1.expect)(value).toEqual({ name: "John Doe" });
    };
    form.requestSubmit();
    vitest_1.expect.assertions(1);
});
//
// Exercise 5: Object Literal Types
const concatName = (user) => {
    return `${user.first} ${user.last}`;
};
(0, vitest_1.it)("should return the full name", () => {
    const result = concatName({
        first: "John",
        last: "Doe",
    });
    (0, vitest_1.expect)(result).toEqual("John Doe");
});
{
    name: "hello";
    age: 23;
}
const isAdmin = (user) => {
    return user.isAdmin;
};
(0, vitest_1.it)("should return the isAdmin value", () => {
    const result = isAdmin({
        name: "John",
        isAdmin: true,
    });
    (0, vitest_1.expect)(result).toEqual(true);
});
const day2_practise_1 = require("./day2.practise");
(0, vitest_1.it)("should return the full name", () => {
    const result2 = (0, day2_practise_1.concatName2)("John", "Doe");
    (0, vitest_1.expect)(result2).toEqual("John Doe");
});
(0, vitest_1.it)("should return the first name", () => {
    const result = (0, day2_practise_1.concatName2)("John");
    (0, vitest_1.expect)(result).toEqual("John Pocock");
});
(0, vitest_1.it)('Should calculate the area of a circle when no kind is passed', () => {
    const result = (0, day3Exercise_1.calculateArea1)({
        radius: 5
    });
    (0, vitest_1.expect)(result).toBe(78.53981633974483);
});
