"use strict";
exports.__esModule = true;
exports.Section = void 0;
var Section = /** @class */ (function () {
    function Section(name) {
        this.name = name;
    }
    Section.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    Section.prototype.setStudent = function (student) {
        this.student = student;
    };
    Section.prototype.getTeacher = function () {
        return this.teacher;
    };
    Section.prototype.getTeacherByName = function (name) {
        if (this.teacher.name === name) {
            return (this.teacher);
        }
    };
    Section.prototype.getStudent = function (student) {
        return this.student;
    };
    return Section;
}());
exports.Section = Section;
