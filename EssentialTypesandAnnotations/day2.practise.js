"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatName2 = void 0;
exports.concatenate = concatenate;
// Exercise 1: Optional Function Parameters
//   we use the ? to make the last parameter optional
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result = concatName("John");
// Exercise 2: Default Function Parameters
const concatName2 = (first, last = "pacock") => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
exports.concatName2 = concatName2;
// Exercise 3: Rest Parameters
function concatenate(...strings) {
    return strings.join("");
}
const modifyUser = (user, id, makeChange) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
modifyUser([
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
], "1", (user) => {
    return { ...user, name: "Alice" };
});
// Exercise 5: Functions Returning void
const addClickEventListener = (listener) => {
    document.addEventListener("click", listener);
};
addClickEventListener(() => {
    console.log("Clicked!");
});
// Exercise 6: void vs undefined
const acceptsCallback = (callback) => {
    callback();
};
const returnString = () => {
    return "Hello!";
};
acceptsCallback(returnString);
// Exercise 7: Typing Async Functions
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}
fetchData();
