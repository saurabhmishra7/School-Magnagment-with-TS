import { Marks as marks } from "../Mark/marks"
import { Student as student } from "../Student/student"
export class ReportCard {
    marks: marks[];
    student: student;
    constructor(marks:marks[],student:student){
        this.marks=marks;
        this.student=student;
    }
    getPercentage(){
        let sum=0;
        let total=marks.length;
        for(let i=0;i<marks.length;++i){
            sum+=marks[i].mark;
        }
        return (sum/(total));
    }
    
    
    
}