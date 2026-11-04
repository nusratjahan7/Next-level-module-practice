//* Top types

let helloWorld : any = "Hello World";
helloWorld = 123;

const something : unknown = "hello wold";

// something.length;

//* Core types

let something2 : unknown;

const num : number = 1234;

something2 = num;

type Status = "pending" | "success";
let someStatus: string;

let status : Status = "pending";

someStatus = status;

//* Nullish types

interface User {
    name: string;
}
type loggedInUser = User | null;

const currentUser : loggedInUser = null;

//* Unit types

const greet = () => {
    console.log("Hello World")
}
greet();

//* Sub-types of types

const anotherGreet = () : undefined => {
    console.log("Hello");
    return undefined;
}
const greetings : void = anotherGreet();
console.log(greetings);

//* Bottom types

const getError = (msg : string): never => {
    throw new Error(msg);
}

// const x : number = getError("ABCD")