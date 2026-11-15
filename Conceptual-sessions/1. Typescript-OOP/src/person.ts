class Person {
    constructor(
        public firstName: string,
        public lastName: string,
    ) {}

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    talk() {
        console.log("talking");
    }

    walk() {
        console.log("walking");
    }
}

class Student extends Person {
    attenedClass() {
        console.log("attending class");

        this.walk();
        this.talk();
    }
}

class Teacher extends Person {
    override get fullName() {
        return "Professor " + this.firstName + " " + this.lastName;
    }
    checking() {
        console.log("checking assignment");
    }
}

const student = new Student("Nusrat", "Jahan");

const teacher = new Teacher("Nusrat", "Jahan");

student.attenedClass();
teacher.checking();

// console.log(teacher.fullName);
