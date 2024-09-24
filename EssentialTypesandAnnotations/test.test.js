"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const day1Exercise_1 = require("./day1Exercise");
const jsdom_1 = require("jsdom");
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
