var StringList = /** @class */ (function () {
    function StringList() {
        this.items = [];
    }
    StringList.prototype.add = function (item) {
        this.items.push(item);
    };
    StringList.prototype.get = function (index) {
        return this.items[index];
    };
    return StringList;
}());
var NumberList = /** @class */ (function () {
    function NumberList() {
        this.items = [];
    }
    NumberList.prototype.add = function (item) {
        this.items.push(item);
    };
    NumberList.prototype.get = function (index) {
        return this.items[index];
    };
    return NumberList;
}());
// Implementation for Dates
var DateList = /** @class */ (function () {
    function DateList() {
        this.items = [];
    }
    DateList.prototype.add = function (item) {
        this.items.push(item);
    };
    DateList.prototype.get = function (index) {
        return this.items[index];
    };
    return DateList;
}());
var stringList = new StringList();
stringList.add("Hello");
stringList.add("World");
console.log("String List:", stringList.get(0));
// Number List
var numberList = new NumberList();
numberList.add(2112);
numberList.add(3.14);
console.log("Number List:", numberList.get(1));
// Date List
var dateList = new DateList();
dateList.add(new Date(2025, 0, 1)); // January 1, 2025
dateList.add(new Date(2025, 11, 31)); // December 31, 2025
console.log("Date List:", dateList.get(0));
