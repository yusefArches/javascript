//var,let
/*var and let are basically the same, except let is created to undo the
wrongs of var, cause var is function scope, which is prone to error*/

//Hoisting

/*Hoisting is javascript under the hood practice, where if you write
a variable using var, javascript well declare that variable in the
begging of the function and delete the declaration that you wrote*/

//example
function setup(){
    console.log(x);
    var x=10;
    console.log(x);
}

setup()

/*so as we see in the example the first log give as undefined, where it 
should give us error of x is not declared, instead we get undefined
 that because of Hoisting as explained above, so the example becomes 
 modified by javascript in the folllowing manner*/

//example (what it really looks like under the hood)
function setup(){
    var x;
    console.log(x);
    x=10;
    console.log(x);
}

setup()
//and this is why var is function scoped, because of Hoisting

//let is block scoped

function block() {
    for (let i = 0; i < 20.; i++) {
        console.log(i);
        
    }
    //console.log(i); // this will give error
}

block()

/*so here console.log(i) gives us an error because i is not decleared 
in the function block, is only decleared in for loop block*/

//so the best practise is to use let

//and const is the same as let, but you can use it to save memory

//in matter of objects we can have a const objet

const echo={ x:20,y:32}

//echo = "car"; //this will give me an error because echo is a const

//but i can change the a property value of constant object

echo.x=44;
console.log(echo);

// and also add a new property

echo.z=98;
echo.k=65;
console.log(echo);

//also delete a property and its value

delete echo.k;
console.log(echo);
