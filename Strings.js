/*in JavaScript an iterable is any datatype that can be iterated over 
using a for of loop. Some of the data types you can iterate over 
are arrays and strings*/

//the array characteristics of strings
//strings behave like arrays as strings are array-like

//example of how String are array-like
//so here JS treates every letter in this string as a value in a array
function letterFinder(word="test",match="t") {
    
    for(var i=0; i<word.length; i++) {
    if(word[i] == match) console.log('Found the', match, 'at', i);
    else console.log('---No match found at', i);
}
}

letterFinder();

//example of how String are not like array

var cat="meow"
//cat.push("rrr"); //this will not work
//cat.pop("rrr");

/*I can confirm that the plus operator here, when used on strings, 
acts as a concatenation operator, meaning it join strings together */

console.log(cat+"kkkk"+2);
//OR we can use
//concat() Methode

console.log((cat.concat("aaaa")).concat(33));

var greet = "Hello, ";
var place = "World";

//Note: concat() Methode creates new array unlike push() which pushes to the same array
const shapes = ['Triangle', 'Square'];

console.log(shapes.concat(['Circle', 'Rectangle']));

console.log(shapes);

//length Methode

greet.length; // 7 //gives the how many letters are in string

//charAt() Methode 
//read each individual character at a specific index in a string, starting from zero
greet.charAt(0); // 'H' 


//concat() Methode
//The concat() method joins two strings:
"Wo".concat("rl").concat("d"); // 'World'   

//indexOf() Methode
//returns the location of the first position that matches a character
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

//lastIndexOf() Methode
//finds the last match, otherwise it works the same as indexOf

lastIndexOf() ;

//split() Methode
//The split method chops up the string into an array of sub-strings:
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

//toUpperCase() & toLowerCase() Methodes

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

//this will copy the value you give it but it will turn it to a array
var copycat = [...cat];
console.log(copycat);


//REVERSE A STRING

string.split("").reverse().join("");

//split