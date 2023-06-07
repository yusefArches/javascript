//Data Types

//Data types split to two catagories 

// primitive & non-primitive

/*There are seven primitive data types in JavaScript
string, number, Boolean, null, undefined, BigInt and symbol*/

null // means empty

Symbol // 

let x=1>2;
x = Boolean(x);


console.log(x);

console.log(Infinity*false); // NaN: Not a Number

//truthy

/*a truthy value is a value that is considered true when encountered 
in a Boolean context. All values are truthy unless they are defined as falsy. That is, 
all values are truthy except 
-----------------false, 0, -0, 0n, "", null, undefined, and NaN.-------------------*/

//Examples of truthy values 
//(which will be coerced to true in boolean contexts, and thus execute the if block):

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity);

//falsy

// falsy values are 
false

0

-0

0n

""

null

undefined

NaN
//this is alternating 0 & 1 for odd & even integers
console.log((i%2===0) *1);




