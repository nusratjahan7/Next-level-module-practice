//* type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

//TODO : type alias

type Id = number;

//! interface id  = number;

type Role = "admin" | "member";

//! interface "admin" | "member"

interface User {
    name : string;
    id : Id;
    role: "admin" | "member";
}

const user : User = {
    id: 234,
    name: "nusrat",
    role: "admin"
}

//TODO : interface 

interface Animal {
    species:  string;
}

interface Cat extends Animal{
    breed : string;

}

const cat : Cat = {
    breed: "Persian",
    species: "Felix Catus",
};


type Vehicle = {
    brand: string;
};

type Car  = Vehicle & {  //? "&" symbol is used to perform intersection 
    model : string;
};

const car : Car = {
    brand: "Toyota",
    model: "Corolla"
};

interface IEmployee {
    name : string
}

interface IEmployee {
    id : number;
}

//! This is not valid
// type TEmployee {
//     name : string
// }

// type TEmployee {
//     id : number;
// }

const employee : IEmployee = {
    id: 342,
    name: "nusrat"
}