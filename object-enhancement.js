//Object Enhancements Exercise
//In this exercise, you’ll refactor some ES5 code into ES2015.
//Write your code in the sections
//with a comment to “Write an ES2015 Version”.

//Same keys and values
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//1. Refactored ES5 code into ES2015

function creatInstructorName(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}
//Same keys and values ES2015
/* Write an ES2015 Version */
//Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

//2. Refactored ES5 code into ES2015
let favoriteNum = 42;

let anInstructor = {
  firstName: "Colt",
  [favoriteNum]: "This is my favorite!",
};

//Computed Property Names ES2015
/* Write an ES2015 Version */
//Object Methods
var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};
//3. Refactored ES5 code into ES2015

let anInstructorName = {
  firstName: "Colt",
  sayHi() {
    return "HI";
  },
  sayBye() {
    return this.firstName + "say bye!";
  },
};

//Object Methods ES2015
/* Write an ES2015 Version */
//createAnimal function
//Write a function which generates an animal object. The function should
//accepts 3 arguments:

//4.Write a function which generates an animal object

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

//species: the species of animal (‘cat’, ‘dog’)
//verb: a string used to name a function (‘bark’, ‘bleet’)
//noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
//Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"
