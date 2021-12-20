import { Subject } from "../Subject/subject";

export class Marks {

    subject: Subject;
    mark: number;
    constructor(subject: Subject, mark: number) {
        this.subject = subject;
        this.mark = mark;
    }

}