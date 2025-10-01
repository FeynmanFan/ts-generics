var NumberTypeList = /** @class */ (function () {
    function NumberTypeList() {
        this.items = [];
    }
    NumberTypeList.prototype.add = function (item) {
        this.items.push(item);
    };
    NumberTypeList.prototype.sum = function () {
        return this.items.reduce(function (sum, item) { return sum + item; }, 0);
    };
    NumberTypeList.prototype.getArray = function () {
        return this.items;
    };
    NumberTypeList.prototype.count = function () {
        return this.items.length;
    };
    return NumberTypeList;
}());
var StringTypeList = /** @class */ (function () {
    function StringTypeList() {
        this.items = [];
    }
    StringTypeList.prototype.add = function (item) {
        this.items.push(item.toUpperCase());
    };
    StringTypeList.prototype.concat = function () {
        return this.items.join('');
    };
    StringTypeList.prototype.getAll = function () {
        return this.items;
    };
    StringTypeList.prototype.count = function () {
        return this.items.length;
    };
    return StringTypeList;
}());
var DateTypeList = /** @class */ (function () {
    function DateTypeList() {
        this.items = [];
    }
    DateTypeList.prototype.add = function (item) {
        this.items.push(new Date(item.getTime())); // Create a new Date to avoid reference issues
    };
    DateTypeList.prototype.earliest = function () {
        if (this.items.length === 0)
            return null;
        return new Date(Math.min.apply(Math, this.items.map(function (date) { return date.getTime(); })));
    };
    DateTypeList.prototype.getArray = function () {
        return this.items;
    };
    DateTypeList.prototype.count = function () {
        return this.items.length;
    };
    return DateTypeList;
}());
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
console.log("String list items: ".concat(JSON.stringify(strList.getAll())));
console.log(strList.concat());
console.log("String list count: ".concat(strList.count())); // 2
var dtList = new DateTypeList();
dtList.add(new Date('2023-10-01'));
dtList.add(new Date('2023-09-15'));
dtList.add(new Date('2023-11-01'));
console.log("Date list items: ".concat(JSON.stringify(dtList.getArray())));
console.log(dtList.earliest());
console.log("Date list count: ".concat(dtList.count())); // 3
