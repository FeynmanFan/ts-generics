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
var TypeList = /** @class */ (function () {
    function TypeList() {
        this.items = [];
    }
    TypeList.prototype.add = function (item) {
        this.items.push(item);
    };
    TypeList.prototype.getArray = function () {
        return this.items;
    };
    TypeList.prototype.count = function () {
        return this.items.length;
    };
    return TypeList;
}());
var Updater = /** @class */ (function () {
    function Updater() {
    }
    Updater.prototype.update = function (list) {
        // loop through the list and update the items using the size of the list
        for (var i = 0; i < list.size(); i++) {
            // Example update logic: just log the item
            console.log("Updating item ".concat(i + 1, ": ").concat(JSON.stringify(list.getArray()[i])));
        }
    };
    return Updater;
}());
var NumberTypeList = /** @class */ (function (_super) {
    __extends(NumberTypeList, _super);
    function NumberTypeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberTypeList.prototype.sum = function () {
        return this.items.reduce(function (sum, item) { return sum + item; }, 0);
    };
    NumberTypeList.prototype.size = function () {
        return this.items.length;
    };
    return NumberTypeList;
}(TypeList));
var StringTypeList = /** @class */ (function (_super) {
    __extends(StringTypeList, _super);
    function StringTypeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringTypeList.prototype.add = function (item) {
        _super.prototype.add.call(this, item.toUpperCase()); // Override to transform to uppercase
    };
    StringTypeList.prototype.concat = function () {
        return this.items.join('');
    };
    StringTypeList.prototype.size = function () {
        return this.items.length;
    };
    return StringTypeList;
}(TypeList));
// Date-specific class
var DateTypeList = /** @class */ (function (_super) {
    __extends(DateTypeList, _super);
    function DateTypeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTypeList.prototype.add = function (item) {
        _super.prototype.add.call(this, new Date(item.getTime())); // Create a new Date to avoid reference issues
    };
    DateTypeList.prototype.earliest = function () {
        if (this.items.length === 0)
            return null;
        return new Date(Math.min.apply(Math, this.items.map(function (date) { return date.getTime(); })));
    };
    return DateTypeList;
}(TypeList));
// Usage examples
var numList = new NumberTypeList();
numList.add(1);
numList.add(2);
numList.add(3);
console.log("Number list items: ".concat(JSON.stringify(numList.getArray())));
console.log(numList.sum());
console.log("Number list count: ".concat(numList.count())); // 3
var strList = new StringTypeList();
strList.add('hello');
strList.add('world');
console.log("String list items: ".concat(JSON.stringify(strList.getArray())));
console.log(strList.concat());
console.log("String list count: ".concat(strList.count())); // 2
var dtList = new DateTypeList();
dtList.add(new Date('2023-10-01'));
dtList.add(new Date('2023-09-15'));
dtList.add(new Date('2023-11-01'));
console.log("Date list items: ".concat(JSON.stringify(dtList.getArray())));
console.log(dtList.earliest());
console.log("Date list count: ".concat(dtList.count())); // 3
var updater = new Updater();
