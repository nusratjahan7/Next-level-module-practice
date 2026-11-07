//* Polymorphism : different employee respond differently to the same method call.

class Employee {
    constructor(
        public name: string,
        private _baseSalary: number,
    ) {}

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    calculatePay(taxRate: number) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}

class Manager extends Employee {
    override calculatePay() {
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
    constructor(
        name: string,
        _baseSalary: number,
        public type: string,
    ) {
        super(name, _baseSalary);
    }

    override calculatePay(taxRate: number) {
        return this.baseSalary + 3000 - this.baseSalary * taxRate;
    }
}

const employee = new Employee("Nusrat", 22000);
const manager = new Manager("Zahid", 30000);
const developer = new Developer("Nus", 30000, "backend");

console.log(employee.calculatePay(0.4));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.1));
