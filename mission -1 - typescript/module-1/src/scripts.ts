//* Basic Type 

// let myString : string = "Programming"
// let myNumber : number = 32323
// let myBoolean : boolean = false
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n


//* Type safe function
const addTwo = (a: number, b: number) => {
    return a + b
}
console.log(addTwo(20, 20));


//* Array and Type am readonly modifier

const arr: string[] = ["Programming", " 343434", "false"]
// const arr2 : Array<string> = ["Programming"," 343434","false"]
const numArr: number[] = [1, 2, 3, 4, 5, 44, 32]


const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125]


//* optional, default and rest parameters (...args)

const contactName = (firstName: string, lastName: string) => {
    if (!lastName) {
        return firstName
    }
    return firstName + " " + lastName;
}
console.log(contactName("nusrat", "jahan"))

//* rest parameters

const sum = (...numbers: number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4);

const logUserAction = (
    ...args: [name: string, age: number, isActive: boolean]
) => {
    const [name, age] = args;
    console.log(name + "is" + age);
}

logUserAction("Nusrat", 20, true);


//* Object  type, type alias and interface

type Address = {
    streetName: string;
    holdingNumber: number;
};

type TUser = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
    address: Address;
};

interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}

const user: TUser = {
    name: "Nusrat",
    age: 123,
    isActive: true,
    action: () => console.log("hello"),
    badges: ["abc", "def"],
    address: {
        streetName: "Kuril",
        holdingNumber: 234
    }
};


