//-------------ARRAYS ARE OBJECTS-----------------

let Sigma="still not calculated";
console.log(Sigma);
let numbers = [32, 29, 67, 97, 04];

function NsumofpositiveInt(o,x) {
    Sigma = ((x*x)+x)/2
    console.log(o+".Sum of Z⁺ from 1 to "+x+" equals", Sigma);
}

for(let i=0; i<=numbers.length-1; i++){
NsumofpositiveInt(a=i+1, numbers[i]);
}


//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

let word;
let match;


function letterFinder(word,match) {

    for(let i=0; i<word.length; i++) {
    if(word[i] == match) console.log('Found the', match, 'at', i+1);
    else console.log('---No match found at', i+1);
}
}

letterFinder("test table","t");

//to copy an array [...array]
let numbers2 = [...numbers];
console.log(numbers2);

//to reverse an array

Array.reverse();

//The splice() Method
/*The splice() method takes two arguments, the index of the element you 
wish to remove and the index you wish to remove up to.

The splice() method creates a new array that stores all the values that 
were removed from the original array. The original array will no longer 
contain the values removed, and its length will be updated.*/

const myArray = [1, 2, 3, 4, 5];

const x = myArray.splice(1, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value: ${x}`);

//map() Methode

//map() creates a new array from calling a function for every array element.

//map() does not execute the function for empty elements.

//map() does not change the original array.

//--------------------------------------
let numbersquaredandrounded=numbers.map(koko)
function koko(cal) {
    return Math.sqrt(cal) | Math.trunc();
    
}
console.log(numbersquaredandrounded);
/*now this is unafficinte because we calling 3 function koko Math.sqrt() 
& Math.trunc() when in fact we could just call math functions directly*/
let newnumbers=numbers.map(Math.sqrt);
console.log('newnumbers',newnumbers);



console.log(numbers2.map(number=> number**2));

//------------diffrent ways to write a function------------------

//A statement is a command. It does something. In most languages, statements do not return values. Example:

//print "Hello World"

/* a function or subroutine is a sequence of program instructions that performs a specific task, 
packaged as a unit. This unit can then be used in programs wherever that particular task should be performed.*/

//1.A Function as a Statement

function Add(num1,num2){
    let sum = num1+ num2; 
    return sum; 
}

let res = Add(7,8);
console.log(res); // 15

/*A function statement starts with the function keyword. 
It can return a primitive type value, object, or another function. 
For example, a function statement can return an object as 
shown in the following code example:*/

function getProduct(){
    let product = {
        Id:1,
        Title:'Book',
        Price: 30
    };
    return product; 
}
let p1 = getProduct();
console.log(p1); // prints product object 

/*The main characteristic of a function statement is it is 
hoisted at the top of the execution context. 
Therefore, you can call a function statement before it is declared, 
as shown in the following code example:*/

let ress = Add(7,8);
console.log(res); // 15

// .... other codes 

function Add(num1,num2){
    let sum = num1+ num2; 
    return sum; 
}

/*As you see, that Add function is called before it is created, 
and this is possible because a function statement is hoisted at the top of the execution context.*/

//-------------MAIN IDEA------------
/*A function statement is hoisted at the top of the execution context. 
So, it can be invoked before it is created.*/
//--------------------------------------



