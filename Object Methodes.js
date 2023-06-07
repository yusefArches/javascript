//A JavaScript method is a property containing a function definition.

/*you will learn how to design objects as combinations of data and functionality.
As you might already know, an object consists of key-value pairs, known as properties.
We can add new key-value pairs to existing objects using the dot notation and the assignment operator.*/
//These are known as properties, and can take many data types, including functions.

var kitchen = {};

kitchen.size = "big";

//add a method to the car object so that it can be called as car.turnkey()
kitchen.oven = function() { 
  console.log('oven is running'); 
}

//------If the function is a property of an object, it is then referred to as a method.-------

/*This is a function that can be accessed only through the JavaScript object 
that it is a member of. For example, the log method, which belongs to the console object, 
can only be accessed through the console object.*/

/*Let's explore this further now. I will create an object using something 
known as the -----constructor function. ----------     */

//first we have object car

var car = {};
car.mileage = 98765;
car.color = "red";


//Next, I want to add a method to my car object. And this method, when called, will output some text to the console. 

/*So, once again, I add another property to my car object. After all, 
a method is just another property of the car object. 
It's just another key-value par that the car object holds.
What's unique is that the value I'm assigning to it is a function.*/

car.turnTheKey = function() {
    console.log("The engine is running")
}

car.turnTheKey();

//So, now I want to add another method to the car object. I'll name this one lightsOn. 

car.lightsOn = function() {
    console.log("The lights are on.")
}

car.lightsOn();





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
