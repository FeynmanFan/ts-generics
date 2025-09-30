function combine<T>(item1: T, item2: T): T[] {
    return [item1, item2];
}

// Usage
const numbers = combine<number>(1, 2); 
const strings = combine<string>("hello", "world"); 

// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const mixed = combine<number>(1, 2112); // TypeScript error