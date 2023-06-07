//Variables
var user;
person="john";
console.log("Hello",person);

//Data Types
/*There are seven primitive data types in JavaScript
string, number, Boolean, null, undefined, BigInt and symbol*/
n=3
f=10**n; //means 10 to the power of n
console.log(f);



//Operators
/*Additional operators
Logical AND operator: && 

Logical OR operator: || 

Logical NOT operator: ! 

The modulus operator: % (gives remainder of divesion)

The equality operator: ==

The strict equality operator: ===

The inequality operator: !=

The strict inequality operator: !==

The addition assignment operator: += 

The concatenation assignment operator: += 
(it's the same as the previous one - more on that later)

https://www.javascripttutorial.net/javascript-comparison-operators/*/

//if-else
if(3<2 || 3==3 && 3<=3){
    x="dog"
}
else x="cat";
console.log(x);

k=2<3;
console.log(k);
if(k==true){
    console.log("your answer is correct");
}else console.log("your answer is uncorrect");


//else-if
light="orange";
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

//Switch statment
//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
       break;
}

//LOOPS

//the for loop
for (var i = 0; i < 3; i++) {
    console.log("i is smaller than 3");
    
}
console.log("i is equal or bigger than 3");

//While loop
var i=0;
while (i<4) {
    console.log(i);
    i++;
    if (i<0) break; // break get you out of loop befor it continuos
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

console.log(!false);
