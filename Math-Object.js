//Math object cheat sheet

/*JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

By the end of this reading, you'll be able to:

Outline the built-in properties and methods of the Math object*/

//Number constants

//Here are some of the built-in number constants that exist on the Math object: 

//The PI number: 
    Math.PI     //which is 

//The Euler's constant: 
Math.E  //which is Euler's constant e

//The natural logarithm of 2: 

Math.LN2    //which is ln(2)

//Logarithmic methods: 

Math.log(); Math.log2(); Math.log10();

console.log(Math.log(Math.E)); // log(e) with base e this returns 1

//Arithmetic and calculus methods
/*Here is a non-conclusive list of some common arithmetic and calculus 
methods that exist on the Math object:*/

Math.pow(2,3)   //calculates the number 2 to the power of 3, the result is 8 

Math.sqrt(16)   //calculates the square root of 16, the result is 4 

Math.cbrt(8)    //finds the cube root of 8, the result is 2 

Math.abs(-10)   //returns the absolute value, the result is 10 

//Trigonometric methods: 
 
Math.sin(), Math.cos(), Math.tan() //etc.

//Return the minimum and maximum values of all the inputs: 

Math.min(9,8,7) //returns 7, 
Math.max(9,8,7) //returns 9.

//Rounding methods
//These include: 

 Math.ceil()    //rounds up to the closest integer 

 Math.floor()   //rounds down to the closest integer 

 Math.round()   //rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

 Math.trunc()   //trims the decimal, leaving only the integer


 //Random Method

 Math.random(); //Generates a number between 0 & 1

 function getRandomInt(min, max) { //Generating a random integer between two values
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

 //Ceil Method (Rounds upwards to the nearest integer)
 //so all this will return value of 1 
 Math.ceil(0.0001)
 Math.ceil(1.5)
 Math.ceil(1.9)

 

