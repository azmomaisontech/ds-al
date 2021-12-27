class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    getName() {
        return `Full Name: ${this.firstname} ${this.lastname}`
    }
}

class Student extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }
}

const student = new Student("Moses", "Aizee")

console.log(student.getName())