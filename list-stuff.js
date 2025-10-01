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
var ListImpl = /** @class */ (function () {
    function ListImpl() {
        this.items = [];
    }
    ListImpl.prototype.add = function (item) {
        this.items.push(item);
    };
    ListImpl.prototype.get = function (index) {
        return this.items[index];
    };
    return ListImpl;
}());
var stringList2 = new ListImpl();
stringList2.add("Hello");
stringList2.add("World");
console.log("String List:");
console.log("Index 0:", stringList2.get(0)); // "Hello"
console.log("Index 1:", stringList2.get(1)); // "World"
console.log("Index 2:", stringList2.get(2112)); // undefined (implicit)
// Number List
var numberList2 = new ListImpl();
numberList2.add(2112);
numberList2.add(3.14);
console.log("Number List:");
console.log("Index 0:", numberList2.get(0)); // 2112
console.log("Index 1:", numberList2.get(1)); // 3.14
console.log("Index 2:", numberList2.get(2113)); // undefined (implicit)
// Date List
var dateList2 = new ListImpl();
dateList2.add(new Date(2025, 0, 1)); // January 1, 2025
dateList2.add(new Date(2025, 11, 31)); // December 31, 2025
console.log("Date List:");
console.log("Index 0:", dateList2.get(0)); // 2025-01-01T00:00:00.000Z
console.log("Index 1:", dateList2.get(1)); // 2025-12-31T00:00:00.000Z
console.log("Index 2:", dateList2.get(2)); // undefined (implicit)
