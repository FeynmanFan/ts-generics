class NumberTypeList {
    private items: number[] = [];

    add(item: number): void {
        this.items.push(item);
    }

    sum(): number {
        return this.items.reduce((sum, item) => sum + item, 0);
    }

    getArray(): number[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

class StringTypeList {
    private items: string[] = [];

    add(item: string): void {
        this.items.push(item.toUpperCase());
    }

    concat(): string {
        return this.items.join('');
    }

    getAll(): string[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

class DateTypeList {
    private items: Date[] = [];

    add(item: Date): void {
        this.items.push(new Date(item.getTime())); // Create a new Date to avoid reference issues
    }

    earliest(): Date | null {
        if (this.items.length === 0) return null;
        return new Date(Math.min(...this.items.map(date => date.getTime())));
    }

    getArray(): Date[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

// Usage examples
const numList = new NumberTypeList();
numList.add(1);
numList.add(2);
numList.add(3);
console.log(`Number list items: ${JSON.stringify(numList.getArray())}`); 
console.log(numList.sum()); 
console.log(`Number list count: ${numList.count()}`); // 3

const strList = new StringTypeList();
strList.add('hello');
strList.add('world');
console.log(`String list items: ${JSON.stringify(strList.getAll())}`); 
console.log(strList.concat()); 
console.log(`String list count: ${strList.count()}`); // 2

const dtList = new DateTypeList();
dtList.add(new Date('2023-10-01'));
dtList.add(new Date('2023-09-15'));
dtList.add(new Date('2023-11-01'));
console.log(`Date list items: ${JSON.stringify(dtList.getArray())}`); 
console.log(dtList.earliest()); 
console.log(`Date list count: ${dtList.count()}`); // 3