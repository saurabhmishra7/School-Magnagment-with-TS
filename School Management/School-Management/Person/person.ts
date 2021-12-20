import { getAge as Age } from "../Age/age";
import { IPerson } from "../Interface/interface";
export abstract class Person  implements IPerson {
    name: string;
    year:number;
    month:number;
    date:number;
    constructor(name: string, dob: number[]) {
        this.name = name;
        this.year=dob[0];
        this.month=dob[1];
        this.date=dob[2];
    }
    getAge() {
        Age(this.year, this.month, this.date);
    }


}