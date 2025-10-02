// Base animal class
class Animal {
    makeSound(): string {
        return "Generic animal sound";
    }
}

// Subclass for dogs
class Dog extends Animal {
    makeSound(): string {
        return "Woof";
    }
}

// Subclass for cats
class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}

// Covariant PetShelter: only gives out pets (read-only)
class PetShelter<out T extends Animal> {
    constructor(private pet: T) {}

    // Returns a pet of type T
    getPet(): T {
        return this.pet;
    }
}

// Contravariant PetFeeder: only accepts pets (write-only)
class PetFeeder<in T extends Animal> {
    // Accepts a pet of type T to feed
    feed(pet: T): void {
        console.log(`Feeding: ${pet.makeSound()}`);
    }
}

// Usage examples
// Create a Dog shelter
const dogShelter = new PetShelter<Dog>(new Dog());

// Covariance: Dog shelter can be treated as an Animal shelter
const animalShelter: PetShelter<Animal> = dogShelter; // OK because of 'out'
console.log(animalShelter.getPet().makeSound()); // Output: Woof

// Create an Animal feeder
const animalFeeder = new PetFeeder<Animal>();

// Contravariance: Animal feeder can be used as a Dog feeder
const dogFeeder: PetFeeder<Dog> = animalFeeder; // OK because of 'in'
dogFeeder.feed(new Dog()); // Output: Feeding: Woof

// Trying the reverse (to show why variance matters)
const catShelter = new PetShelter<Cat>(new Cat());
const wrongShelter: PetShelter<Dog> = catShelter; // Error: Cat isn't a Dog

const dogFeederSpecific = new PetFeeder<Dog>();
const wrongFeeder: PetFeeder<Cat> = dogFeederSpecific; // Error: Dog feeder can't accept Cats