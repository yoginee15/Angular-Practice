var Test = /** @class */ (function () {
    function Test(_x, y) {
        this._x = _x;
        this.y = y;
        this.x = _x;
        this.y = y;
    }
    Object.defineProperty(Test.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    return Test;
}());
var test = new Test(2, 3);
console.log(test.x);
test.x = 10;
