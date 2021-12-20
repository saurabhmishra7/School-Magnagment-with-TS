"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Teacher = void 0;
var person_1 = require("../Person/person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, dob) {
        return _super.call(this, name, dob) || this;
    }
    Teacher.prototype.setTeachingSubject = function (teachingSubject) {
        this.teachingSubject = teachingSubject;
    };
    Teacher.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Teacher.prototype.getSalary = function () {
        return (this.salary);
    };
    Teacher.prototype.getTeachingSubject = function () {
        return this.teachingSubject;
    };
    return Teacher;
}(person_1.Person));
exports.Teacher = Teacher;
