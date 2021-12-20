"use strict";
exports.__esModule = true;
exports.Person = void 0;
var age_1 = require("../../Age/age");
var Person = /** @class */ (function () {
    function Person(name, dob) {
        this.name = name;
        this.year = dob[0];
        this.month = dob[1];
        this.date = dob[2];
    }
    Person.prototype.getAge = function () {
        (0, age_1.getAge)(this.year, this.month, this.date);
    };
    return Person;
}());
exports.Person = Person;
