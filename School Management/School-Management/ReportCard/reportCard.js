"use strict";
exports.__esModule = true;
exports.ReportCard = void 0;
var marks_1 = require("../Mark/marks");
var ReportCard = /** @class */ (function () {
    function ReportCard(marks, student) {
        this.marks = marks;
        this.student = student;
    }
    ReportCard.prototype.getPercentage = function () {
        var sum = 0;
        var total = marks_1.Marks.length;
        for (var i = 0; i < marks_1.Marks.length; ++i) {
            sum += marks_1.Marks[i].mark;
        }
        return (sum / (total));
    };
    return ReportCard;
}());
exports.ReportCard = ReportCard;
