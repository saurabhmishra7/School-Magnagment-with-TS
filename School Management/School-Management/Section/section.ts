import { getAge as Age } from "../Age/age";
import { Person as Person } from "../Person/person";
import { IPerson as IPerson } from "../Interface/interface";
import { Teacher as teacher } from "../Teacher/teacher";
import { Student as student } from "../Student/student";
export class Section {
    name: string;
    teacher: teacher;
    student: student;
    constructor(name: string) {
        this.name = name;
    }
    setTeacher(teacher: teacher) {
        this.teacher=teacher;
    }
    setStudent(student: student) {
        this.student = student;
    }
    getTeacher() {
        return this.teacher;
    }
    getTeacherByName(name:string){
    
            if(this.teacher.name===name){
                return (this.teacher);
            }
        
    }
    getStudent(student: student) {
        return this.student;
    }



}
