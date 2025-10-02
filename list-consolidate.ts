abstract class TypeList<T extends number | string | Date>{
    protected items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getArray(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

class NumberTypeList extends TypeList<number> {
    sum(): number {
        return this.items.reduce((sum, item) => sum + item, 0);
    }
}

class StringTypeList extends TypeList<string> {
    add(item: string): void {
        super.add(item.toUpperCase()); // Override to transform to uppercase
    }

    concat(): string {
        return this.items.join('');
    }
}

// Date-specific class
class DateTypeList extends TypeList<Date> {
    add(item: Date): void {
        super.add(new Date(item.getTime())); // Create a new Date to avoid reference issues
    }

    earliest(): Date | null {
        if (this.items.length === 0) return null;
        return new Date(Math.min(...this.items.map(date => date.getTime())));
    }
}

class User {
    constructor(public username: string, public password: string) {}
    toString(): string {
        return `${this.username} (${this.password})`;
    }
}

class UserTypeList extends TypeList<User> {
    add(item: User): void {
        super.add(new User(item.username, item.password)); // Create a new User to avoid reference issues       
    }

    updatePassword(username: string, newPassword: string): boolean {
        // do stuff
        return true;
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
console.log(`String list items: ${JSON.stringify(strList.getArray())}`); 
console.log(strList.concat()); 
console.log(`String list count: ${strList.count()}`); // 2

const dtList = new DateTypeList();
dtList.add(new Date('2023-10-01'));
dtList.add(new Date('2023-09-15'));
dtList.add(new Date('2023-11-01'));
console.log(`Date list items: ${JSON.stringify(dtList.getArray())}`); 
console.log(dtList.earliest()); 
console.log(`Date list count: ${dtList.count()}`); // 3