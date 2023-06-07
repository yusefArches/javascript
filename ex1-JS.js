
/*Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

1. First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

2. Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

3. Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

4. For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10

*/
// SOLUTION 1
for (let i=1; i<11; i++) {
    
console.log( i==1&&"Gold medal" || i==2&&"Silver medal" || i==3&&"Bronze medal" || i );
}

/*-------THE EXPLANATION OF THIS SOLUTION--------

&& returns seconde value only if first one is true
console.log(0&&"f"||22); prints 22 here 0 is equavelant to false
console.log(1&&"f"||22); prints f here 1 is equavelant to true
|| returns seconde value only if first one is false

OR Operator (||):

It returns the value of the first operand that validates as true (if any), 
otherwise it returns the value of the last operand (even if it validates as false).

https://developer.mozilla.org/en-US/docs/Glossary/Truthy

AND Operator (&&):

It returns the value of the last operand that validates as true (if all conditions validates as true), 
otherwise it returns the value of the first operand that validates as false.

https://developer.mozilla.org/en-US/docs/Glossary/Falsy



*/

// SOLUTION 2 Conditional (ternary) operator

for (let i=1; i<11; i++) {
    
    let output = (i==1)? "Gold medal" : ((i==2) ? "Silver medal" : ((i==3) ? "Bronze medal" : i));
    
    console.log(output);
    }
    /*
    In JavaScript, there is also a shorthand version of writing a conditional statement, 
    known as the conditional (ternary) operator: Conditional (ternary) operator
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    */

// SOLUTION 3 if else

for (let i = 1; i <11; i++) {
    
    if(i==1)console.log("Gold medal");
    else if(i==2)console.log("Silver medal");
    else if(i==3)console.log("Bronze medal");
    else console.log(i);
    
}

//SOLUTION 4 switch

for (let i = 1; i <11; i++) {
    
    switch(i){
    case 1: 
    console.log("Gold medal");
    break;
    case 2:
    console.log("Silver medal");
    break;
    case 3:
    console.log("Bronze medal");
    break;
    default :
    console.log(i);
    }
}

//SOLUTION 5

//Object Literal Brackets Notation & nullish coalescing operator

let obj;
for (var i = 1; i <11; i++) {
 obj={

    1:"Gold medal",
    2:"Silver medal",
    3:"Bronze medal",
    cat:"meow"
}
//console.log(i+". ".concat(obj[i] ?? i));
console.log(i+'.',obj[i] ?? i);

}


console.log(obj[1]+obj.cat);

//SOLUTION 6 using array

let medals =["Gold","Silver","Bronze"];
console.log("-------------------------------------");
let output;
for (let i = 0; i < 10; i++) {
    
    if (medals[i]===undefined) output=i+1;
    else output=medals[i]+" medal";
    console.log(output);
    
}

