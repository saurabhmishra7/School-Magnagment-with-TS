import { getAge as Age } from "../Age/age";
import { Person as Person } from "../Person/person";
import { IPerson as IPerson } from "../Interface/interface"
import { ReportCard as reportCard } from "../ReportCard/reportCard";
import { Marks } from "../Mark/marks";

export class Student extends Person implements IPerson {
    name: string;
    year: number;
    month: number;
    date: number;
    reportCard: reportCard;
    constructor(name: string, dob: number[]) {
        super(name,dob);
         
    }

    setReportCard(reportCard:reportCard){
      this.reportCard=reportCard;
    } 

    getReportCard(){
        
        return (this.reportCard);
    }

    
}

