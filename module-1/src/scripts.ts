//* Basic Type 

// let myString : string = "Programming"
// let myNumber : number = 32323
// let myBoolean : boolean = false
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n


//* Type safe function
const addTwo = (a : number, b : number) => {
    return a + b
}
console.log( addTwo(20, 20));


//* Array and Type am readonly modifier

const arr : string[] = ["Programming"," 343434","false"]
// const arr2 : Array<string> = ["Programming"," 343434","false"]
const numArr : number[] = [1, 2, 3, 4, 5, 44, 32]


const dhakaLatLong : readonly [number, number]= [23.8103, 90.4125]


//* optional, default and rest parameters (...args)

const contactName = (firstName : string, lastName: string) => {
    if(!lastName){
        return firstName
    }
    return firstName + " " + lastName;
}
console.log(contactName("nusrat", "jahan"))