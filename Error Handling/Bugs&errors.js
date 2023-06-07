//Bug
//is when our program keeps running, but it behaves in a way we didn't intend. 

/*what if you pass to the function some varying data types, 
such as a string and a number? For example, a string of one and number
of two. For this, recall how concatenation works. 
Due to JavaScript coercion, when you add a string and numbers 
using concatenation with the plus operator, the values 
will concatenate as strings. Thus, the result is a string of 12. 
Our function is now no longer adding numbers. 
Instead, it is concatenating strings. 
However, JavaScript happily continues executing the code, 
outputs the string of 12 and console logs the words still running. 
Notice that our program is working without interruption. 
However, it is not working how we intended it to work. 
This is what's referred to as a bug, 
as it makes our code behave unexpectedly, but it continues to work*/

function addNumbers(a,b) {
    console.log(a+b);
}
addNumbers("1",2)


//Error
/*Suppose you had simpler programming that has two statements. 
The first uses console log to output c plus d, 
and the second one uses console log to output the statement, 
this line never runs. What at these two lines of code were 
the only lines of code in our program. Where would JavaScript 
find the values of the variables c and d? Well, 
it wouldn't because in the sample code, these variables don't exist. 
They have neither being declared or assigned. 
It would look for the variables of c and d. Since they don't exist, 
JavaScript outputs a -----------reference error.--------------- 
This type of error occurs when a value is not defined   */

console.log(c+d); //--reference error--.

/* When an error happens, our program stops execution the code as a 
direct consequence. No further lines of code are executed. */

console.log("this line never runs"); //this line will not execute

/* In JavaScript and some other programming languages, 
we say that an ------error is thrown.-------- */

/* An error can be defined as a faulty piece of code that prevents 
the program from further execution, */

/*In JavaScript, there are many error types and some of the most 
common are */

//var word="hello; // --syntax error--,-  

(5).pop; //-type error-- 







