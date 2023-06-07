/*Objects can be described as collections of related properties 
where each property is represented as a key value pair. 
This means that what is normally a variable name 
becomes a property key and what is normally a variable's value 
becomes the property value of the object


----------Object Literals and the Dot Notation---------

One of the most common ways of building an object in JavaScript 
is using the object literal syntax: {}
var user = {}; //create an object   */

var storeManager={};

storeManager.smarts=11;

var assistantManager = {
    rangeTilesPerTurn: 3,   //property:'value'
    socialSkills: 30,       //property:'value'
    streetSmarts: 30,       //property:'value'
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

let starTile={

    redStar:10,
    yellowSquare:33,
    blueCircle:269,
    cart:''

}
starTile.whiteRectangle=54;

// delete a object property and its value
delete starTile.yellowSquare;

console.log(starTile);

//----------------------------------------------
//----------Object Literals and the Brackets Notation------------
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2);

/*With the brackets notation, I can add space characters 
inside property names, like this: */
var car={};
car["number of doors"] = 4;
//Additionally, I can add numbers (as the string data type) as property keys:  
car["car model year pre 2000"] = 1901;

// delete a object property and its value
delete car["number of doors"];

console.log(car);

/*Finally, there's one really useful thing that bracket notation 
has but is not available in the dot notation: It can evaluate expressions.
To understand what that means, consider the following example:*/

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//Arrays are objects
/*
-Explain that arrays are objects, 
with their own built-in properties and methods

-Outline the common way to extend arrays using the push() method

-and explain how to trim the last member of an array using the pop() method

In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.
*/

//To add new items to an array, I can use the push() method:
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

//To remove the last item from an array, I can use the pop() method:  
fruits.pop();
console.log(fruits); // ['apple']

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one,two,three);
    return arr;
}

console.log(arrayBuilder("cow","bowl","crab")); 

var array =["clothes"];
array.push("sweater","sloth","dasola","fomanita","xohija");
array.pop();
array.push("copiza");
console.log(array[2]);
var favCar = {};
favCar.color="red";
favCar.convertible=true;
console.log(favCar);

console.log(favCar.color);


