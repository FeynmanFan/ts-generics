function combine(item1, item2) {
    return [item1, item2];
}
// Usage
var numbers = combine(1, 2);
var strings = combine("hello", "world");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var mixed = combine(1, 2112); // TypeScript error
