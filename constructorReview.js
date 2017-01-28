//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

//code here
function Animal(species, name, legs, color, food)
{
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

//code here
function person(name, age, height, gender)
{
    return {
        name: name,
        age: age,
        height: height,
        gender: gender
    };
}

//Create a animal array and a person array.

//code here
var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array

//code here
animals.push(new Animal("Dog", "Rex", 4, "black", ["dog food", "everything!"]), new Animal("Shark", "Bruce", 0, "gray", ["Rex", "Dog"]));

//Create two instances of person and push those into your person array.

//code here
persons.push(person("Me", 22, "5'8", "male"), person("Myself", 22, "5'8", "Male"));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

//code here
Animal.prototype.eat = function ()
{
    console.log(this.name + " ate " + this.food[getRandomInt(0, this.food.length)]);
};

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

animals[0].eat();
animals[0].eat();
animals[0].eat();

animals[1].eat();
animals[1].eat();
animals[1].eat();

//At this point, if we wanted to add something to every instance of person could we?

//Yes or no? and why or why not?
//Not with prototype because we didn't use a constructor


/*
 1) What happens when you use the 'new' keyword to call a Constructor function? Creates and returns a newly created object
 2) What's a good way to describe the keyword 'this'? Refers to the current object in the context that it resides
 3) Can a normal function which creates an object and then returns that object use the prototype? No
 4) What happens if you forget to use 'new' when calling a constructor? it returns undefined
 */