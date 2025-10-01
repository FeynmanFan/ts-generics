interface List<T> {
    add(item: T): void;
    get(index: number): T | undefined;
}

class StringList implements List<string> {
    private items: string[] = [];   
    add(item: string): void {
        this.items.push(item);
    }   
    get(index: number): string  {
        return this.items[index];
    }
}

class NumberList implements List<number> {
    private items: number[] = [];
    add(item: number): void {
        this.items.push(item);
    }

    get(index: number): number  {
        return this.items[index];
    }
}

// Implementation for Dates
class DateList implements List<Date> {
    private items: Date[] = [];
    add(item: Date): void {
        this.items.push(item);
    }

    get(index: number): Date  {
        return this.items[index];
    }
}

const stringList: List<string> = new StringList();
stringList.add("Hello");
stringList.add("World");
console.log("String List:", stringList.get(0)); 

// Number List
const numberList: List<number> = new NumberList();
numberList.add(2112);
numberList.add(3.14);
console.log("Number List:", numberList.get(1));

// Date List
const dateList: List<Date> = new DateList();
dateList.add(new Date(2025, 0, 1)); // January 1, 2025
dateList.add(new Date(2025, 11, 31)); // December 31, 2025
console.log("Date List:", dateList.get(0));

class ListImpl<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    get(index: number): T | undefined {
        return this.items[index];
    }
}

const stringList2 = new ListImpl<string>();
stringList2.add("Hello");
stringList2.add("World");
console.log("String List:");
console.log("Index 0:", stringList2.get(0)); // "Hello"
console.log("Index 1:", stringList2.get(1)); // "World"
console.log("Index 2:", stringList2.get(2112)); // undefined (implicit)

// Number List
const numberList2 = new ListImpl<number>();
numberList2.add(2112);
numberList2.add(3.14);
console.log("Number List:");
console.log("Index 0:", numberList2.get(0)); // 2112
console.log("Index 1:", numberList2.get(1)); // 3.14
console.log("Index 2:", numberList2.get(2113)); // undefined (implicit)

// Date List
const dateList2 = new ListImpl<Date>();
dateList2.add(new Date(2025, 0, 1)); // January 1, 2025
dateList2.add(new Date(2025, 11, 31)); // December 31, 2025
console.log("Date List:");
console.log("Index 0:", dateList2.get(0)); // 2025-01-01T00:00:00.000Z
console.log("Index 1:", dateList2.get(1)); // 2025-12-31T00:00:00.000Z
console.log("Index 2:", dateList2.get(2)); // undefined (implicit)