//constructor function
/*
function person(name, id, salary) {
    var info
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.print = function () {
        info = this.personName + ' ' + this.personSalary
        return info
    }
}
*/
/*
//JS version:
class Person {
    constructor(name, id, salary) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    print() {
        return this.personName + ' ' + this.personSalary
    }
}
class Trainee extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.traineeSubject = subject
    }
    print() {
        return super.print() + ' ' + this.traineeSubject
    }
}
const anilPerson = new Trainee('anil', 1, 1000, 'JavaScript')
const res = anilPerson.print()
console.log(res)
*/
class Person {
    personName: string;
    personId: number;
    personSalary: number;

    constructor(name: string, id: number, salary: number) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    print(): string {
        return this.personName + ' ' + this.personSalary
    }
}
class Trainee extends Person {
    private traineeSubject: string;

    constructor(name: string, id: number, salary: number, subject: string) {
        super(name, id, salary)
        this.traineeSubject = subject
    }
    get TraineeSubject(): string {
        return this.traineeSubject
    }
    set TraineeSubject(val: string) {
        this.traineeSubject = val
    }
    print(): string {
        return super.print() + ' ' + this.traineeSubject
    }
}
const anilPerson = new Trainee('anil', 1, 1000, 'JavaScript')
//dot operator
console.log(anilPerson.personName)
//indexer
console.log(anilPerson['personSalary'])
const res = anilPerson.print()
//console.log(anilPerson['print']())
console.log(res)
anilPerson.TraineeSubject = 'Java'
console.log(anilPerson.TraineeSubject)
//anilPerson.location = 'Bangalore'
// anilPerson.sayHi = function () {
//     console.log('Hi...')
// }