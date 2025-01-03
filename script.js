// Animal class definition
class Animal {
  constructor(species) {
    this._species = species; // Use underscore to indicate private-like variable
  }

  // Getter method for species
  get species() {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Cat that logs "purr"
  purr() {
    console.log("purr");
  }
}

// Dog class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Dog that logs "woof"
  bark() {
    console.log("woof");
  }
}

// Example usage:

// Creating an instance of Cat
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

// Creating an instance of Dog
const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof
