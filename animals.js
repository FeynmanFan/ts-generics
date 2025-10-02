var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base animal class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        return "Generic animal sound";
    };
    return Animal;
}());
// Subclass for dogs
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof";
    };
    return Dog;
}(Animal));
// Subclass for cats
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow";
    };
    return Cat;
}(Animal));
// Covariant PetShelter: only gives out pets (read-only)
var PetShelter = /** @class */ (function () {
    function PetShelter(pet) {
        this.pet = pet;
    }
    // Returns a pet of type T
    PetShelter.prototype.getPet = function () {
        return this.pet;
    };
    return PetShelter;
}());
// Contravariant PetFeeder: only accepts pets (write-only)
var PetFeeder = /** @class */ (function () {
    function PetFeeder() {
    }
    // Accepts a pet of type T to feed
    PetFeeder.prototype.feed = function (pet) {
        console.log("Feeding: ".concat(pet.makeSound()));
    };
    return PetFeeder;
}());
// Usage examples
// Create a Dog shelter
var dogShelter = new PetShelter(new Dog());
// Covariance: Dog shelter can be treated as an Animal shelter
var animalShelter = dogShelter; // OK because of 'out'
console.log(animalShelter.getPet().makeSound()); // Output: Woof
// Create an Animal feeder
var animalFeeder = new PetFeeder();
// Contravariance: Animal feeder can be used as a Dog feeder
var dogFeeder = animalFeeder; // OK because of 'in'
dogFeeder.feed(new Dog()); // Output: Feeding: Woof
// Trying the reverse (to show why variance matters)
var catShelter = new PetShelter(new Cat());
var wrongShelter = catShelter; // Error: Cat isn't a Dog
var dogFeederSpecific = new PetFeeder();
var wrongFeeder = dogFeederSpecific; // Error: Dog feeder can't accept Cats
