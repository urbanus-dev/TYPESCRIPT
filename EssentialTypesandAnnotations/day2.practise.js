"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatName2 = void 0;
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
