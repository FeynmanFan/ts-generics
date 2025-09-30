function getFirst<T>(array: T[]): T {
    return array[0];
}

// Usage
console.log(getFirst<number>([1, 2, 3])); // Returns 1, typed as number
console.log(getFirst<string>(["a", "b", "c"])); // Returns "a", typed as string