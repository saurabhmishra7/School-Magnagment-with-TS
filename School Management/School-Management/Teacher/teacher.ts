import { getAge as Age } from "../Age/age";
import { Person as Person } from "../Person/person";
import { IPerson as IPerson } from "../Interface/interface";
import { Subject as subject } from "../Subject/subject"
export class Teacher extends Person implements IPerson {
    name: string;
    year: number;
    month: number;
    date: number;
    salary: number;
    teachingSubject: subject;

    constructor(name: string, dob: number[]) {
        super(name, dob);

    }
    setTeachingSubject(teachingSubject:subject){
        this.teachingSubject=teachingSubject;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }
    getSalary() {
        return (this.salary);
    }
    getTeachingSubject(){
        return this.teachingSubject;
    }
}

