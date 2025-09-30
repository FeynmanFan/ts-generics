class TypedList {
    constructor(type) {
        this.items = [];
        this.type = type; // Store the expected type (e.g., "number", "string")
    }

    add(item) {
        if (typeof item !== this.type) {
            throw new Error(`Item must be of type ${this.type}, got ${typeof item}`);
        }
        this.items.push(item);
    }

    get(index) {
        return this.items[index];
    }
    
    getAll() {
        return [...this.items];
    }

    size() {
        return this.items.length;
    }
}