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