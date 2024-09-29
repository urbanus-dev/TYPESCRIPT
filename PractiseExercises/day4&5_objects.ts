import { promises } from "dns";
import { Expect, Equal } from '@total-typescript/helpers'
// Exercise 1: Create an Intersection Type
type BaseEntity = {
    id: string;
    createdAt: Date;
}
type User = {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
} & BaseEntity;

type Product = {
    id: string;
    createdAt: Date;
    name: string;
    price: number;
} & BaseEntity;

// Exercise 2: Extending Interfaces

interface BaseEntity1 {
    id: string;
    createdAt: Date;
}
interface User1 {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
}

interface Product1 {
    id: string;
    createdAt: Date;
    name: string;
    price: number;
}

interface UserInfo extends User1, BaseEntity1 {
    name: string;
    email: string;
}
interface ProductInfo extends Product1, BaseEntity1 {
    name: string;
    price: number;
}

// // Index Signatures for Dynamic Keys
// const albumAwards :{
//     [index :string]:boolean;
// }={};

// albumAwards.Grammy = true;
// albumAwards.MercuryPrize = false;
// albumAwards.Billboard = true;


// // Using a Record Type for Dynamic Keys
// const albumAwards1: Record<"Grammy" | "MercuryPrize" | "Billboard", boolean> = {
//     Grammy: true,
//     MercuryPrize: false,
//     Billboard: true,
//   };

//  //object syntax
//   function acceptAllNonPrimitives(obj: object) {} 



// Exercise 1: Use an Index Signature for Dynamic Keys
const scores: {
    [index: string]: number;
} = {};
scores.math = 95;
scores.english = 90;
scores.science = 85;


// Exercise 2: Default Properties with Dynamic Keys

interface Scores {


    [subject: string]: number
    math: number;
    english: number;
    science: number;
}
interface RequiredS {
    math: number;
    english: number;
    science: number;
}

interface Scores extends RequiredS {
}

const scores1: Scores = {
    math: 95,
    english: 90,
    science: 90
};

scores1.athletics = 100;
scores1.french = 75;
scores1.spanish = 70;


// Exercise 3: Restricting Object Keys With Records
type Environment = "development" | "production" | "staging";

type Configurations = Record<Environment,
    {
        apiBaseUrl: string;
        timeout: number;
    }
>;

const configurations: Configurations = {
    development: {
        apiBaseUrl: "http://localhost:8080",
        timeout: 5000,
    },
    production: {
        apiBaseUrl: "https://api.example.com",
        timeout: 10000,
    },
    staging: {
        apiBaseUrl: "https://staging.example.com",
        timeout: 8000,
    },
    // @ts-expect-error
    notAllowed: {
        apiBaseUrl: "https://staging.example.com",
        timeout: 8000,
    },
};


// Exercise 4: Dynamic Key Support
export const hasKey = (obj: object, key: string | number | symbol) => {
    return obj.hasOwnProperty(key);
};

//Exercise 1: Expecting Certain Properties
interface User2 {
    id: string;
    name: string;
    email: string;
    role: string;
}
type PickedUser = Pick<User2, "name" | "email">;

const fetchUser = async (): Promise<PickedUser> => {
    const response = await fetch("/api/user");
    const user = await response.json();
    return {
        name: user.name,
        email: user.email
    };
};

const example = async () => {
    const user = await fetchUser();

    type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};


// Exercise 2: Updating a Product
interface Product3{
    id: number;
    name: string;
    price: number;
    description: string;
  }
  type ProductInfo1 = Partial<Omit<Product3, 'id'>>;

  const updateProduct = (id: number, productInfo1: ProductInfo1) => {
  };
  updateProduct(1, {
    name: "Book",
  });

 updateProduct(1, {
  price: 12.99,
});