import { it, expect} from "vitest";
import {Expect, Equal} from '@total-typescript/helpers'
import { handleFormData } from "./day1Exercise";
import { JSDOM } from 'jsdom';
import { format } from "path";
const { document } = new JSDOM().window;
it("Should handle a form submit", () => {
    const form = document.createElement("form");
    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;

    form.onsubmit = (e) => {
        const value = handleFormData(e);

        expect(value).toEqual({ name: "John Doe" });
    };

    form.requestSubmit();

    expect.assertions(1);
  });

  //
// Exercise 5: Object Literal Types

  const concatName = (user:{first:string;last:string}) => {
      return `${user.first} ${user.last}`;
    };
    it("should return the full name", () => {
        const result = concatName({
          first: "John",
          last: "Doe",
        });
      
        type test = Expect<Equal<typeof result, string>>;
      
        expect(result).toEqual("John Doe");
      });