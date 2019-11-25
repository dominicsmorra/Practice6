
"use strict";
exports.__esModule = true;
var Sorting = /** @class */ (function () {
    function Sorting() {
    }
    Sorting.stringSorter = function (a, b) {
        if (a < b){
            return a
        } 
        return b
    };
    return Sorting;
}());
exports["default"] = Sorting;
