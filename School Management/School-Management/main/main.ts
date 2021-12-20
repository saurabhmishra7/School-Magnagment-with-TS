import { getAge } from "../Age/age";
import { Person } from "../Person/person";
import { IPerson } from "../Interface/interface";
import { ReportCard } from "../ReportCard/reportCard";
import { Subject } from "../Subject/subject";
import { Section } from "../Section/section";
import { Student } from "../Student/student";
import { Marks } from "../Mark/marks";
import { Teacher } from "../Teacher/teacher";


const math = new Subject("Mathematics");
const science = new Subject("Science");
const sansksrit = new Subject("Sansksrit");
const computerScience = new Subject("ComputerScience");
const markmath = new Marks(math,77);
const markscience = new Marks(science,88);
const makrsansksrit = new Marks(sansksrit,81);
const markcomputerScience = new Marks(computerScience,89);

const Saurabh = new Student("Saurabh Mishra",[1999,1,14]);
const report1 = new ReportCard([markmath, markscience, markcomputerScience, makrsansksrit], Saurabh);
Saurabh.setReportCard(report1);
console.log(Saurabh.getReportCard());

const Shubham = new Teacher("Shubham Mishra", [1987,9,11]);
const Shivam = new Teacher("Shivam Singh", [1990,11,14]);


const tulip = new Section("Tulip");
const rose = new Section("Rose");
tulip.setTeacher(Shubham);
console.log(tulip.getTeacherByName("Shubham Mishra"));



