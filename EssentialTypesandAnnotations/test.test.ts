import { it, expect} from "vitest";
import {Expect, Equal} from '@total-typescript/helpers'
import { handleFormData } from "./day1Exercise";
import { JSDOM } from 'jsdom';
import { format } from "path";
import {calculateArea1}from "./day3Exercise";
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


    type AllTypes=  null 
                    | undefined
                    | string
                    | number
                    | boolean
                    | symbol
                    | bigint
  {
    name: "hello";
    age: 23;
  }
// Literal Types

type IsAdmin = true | false;
const isAdmin = (user: { name: string; isAdmin: IsAdmin }) => {
  return user.isAdmin;
}
it("should return the isAdmin value", () => {
    const result = isAdmin({
      name: "John",
      isAdmin: true,
    });
  
    type test = Expect<Equal<typeof result, IsAdmin>>;
  
    expect(result).toEqual(true);
  });


 import{concatName2}from "./day2.practise"
  it("should return the full name", () => {
    const result2 = concatName2("John", "Doe");
  
    type test = Expect<Equal<typeof result2, string>>;
  
    expect(result2).toEqual("John Doe");
  });

  it("should return the first name", () => {
    const result = concatName2("John");
  
    type test = Expect<Equal<typeof result, string>>;
  
    expect(result).toEqual("John Pocock");
  });


  
  
  it('Should calculate the area of a circle when no kind is passed', () => {
    const result = calculateArea1({
      radius: 5
    });
  
    expect(result).toBe(78.53981633974483);
  
    type test = Expect<Equal<typeof result, number>>;
  });