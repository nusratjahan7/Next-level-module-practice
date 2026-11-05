class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee = new Employee("Nusrat", 22000);
const employee2 = new Employee("Jahan", 343434);

// console.log(employee instanceof Employee, employee, employee2);
