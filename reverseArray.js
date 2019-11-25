var Reverse = /** @class */ (function () {
    function Reverse(arr) {
        this.arr = arr.reverse()
    }
    return this.arr
}());

var Reverse = /** @class */ (function () {
    function Reverse(arr) {
        this.arr = arr.reverse()
    }
    return Reverse;
}());

let arr = ['yes', 5, false]
console.log(arr)
let r = new Reverse(arr)
console.log(r.arr)

