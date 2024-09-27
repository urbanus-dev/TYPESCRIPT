
// Exercise 1: Optional Function Parameters
//   we use the ? to make the last parameter optional
const concatName = (first: string, last?: string) => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };
  const result = concatName("John");

// Exercise 2: Default Function Parameters
export const concatName2 = (first: string, last: string="pacock") => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };

// Exercise 3: Rest Parameters
export function concatenate(...strings:Array<string>) {
    return strings.join("");
  }


// Exercise 4: Function Types
type User = {
  id: string;
  name: string;
};

const modifyUser = (user: User[], 
  id: string, 
  makeChange:(user:User)=>User,
) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};
modifyUser(
  [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
  ],
  "1",
  (user) => {
    return { ...user, name: "Alice" };
  }
);

// Exercise 5: Functions Returning void

const addClickEventListener = (listener:()=>void) => {
    document.addEventListener("click", listener);
  };
  
  addClickEventListener(() => {
    console.log("Clicked!");
  });


// Exercise 6: void vs undefined
const acceptsCallback = (callback: () => void) => {
  callback();
};
const returnString = () => {
  return "Hello!";
};

acceptsCallback(returnString);

// Exercise 7: Typing Async Functions
async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");

  const data = await response.json();

  return data;
}
fetchData();
