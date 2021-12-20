"use strict";
exports.__esModule = true;
exports.getAge = void 0;
function getAge(year, month, day) {
    var dob = new Date(year, month, day);
    var curDate = new Date();
    var dy = curDate.getDate() - dob.getDate();
    var mnth = curDate.getMonth() - dob.getMonth() + 1;
    var age = curDate.getFullYear() - dob.getFullYear();
    if (age === 0) {
        return age;
    }
    if (mnth > 0) {
        return (age);
    }
    if (mnth < 0) {
        return (age - 1);
    }
    if (mnth === 0) {
        if (dy >= 0) {
            return (age);
        }
        else {
            return (age - 1);
        }
    }
}
exports.getAge = getAge;
