//exercise
//add digits of a number exmple 63567 add= 6+3+5+6+7

//SOLUTION 1

let TheNumber=56758682;
const TheNumberCopy= TheNumber;
const NumberString = TheNumber.toString();
let remainderstring;
let NumberDigitsSum=0;
let TheNumberStyle='';

for ( let i = 0; i < NumberString.length; i++) {
    //here you may say why you just use NumerString but when you divide it turns to a number
    remainderstring=(TheNumber/10).toString().split('.');
    
    TheNumberStyle+=' + '+remainderstring[1];

    NumberDigitsSum+=Number(remainderstring[1]);
    
    TheNumber=remainderstring[0];

    /*console.log(typeof(TheNumber));
    console.log(typeof(TheNumber/10));*/
    

}
//this line replace the first + with = in TheNumberStyle
const TheNumberStyleCorrected = TheNumberStyle.replace('+','=');
//this line reverse the 
const TheNumberStyleReversed=TheNumberStyleCorrected.split("").reverse().join("");

console.log("---The Sum of",TheNumberCopy,'Digits---');

console.log( TheNumberStyleReversed + NumberDigitsSum);

//---------------------------------------------------------------------------------

//SOLUTION 2
const Number1 = 65759373;

const Number1DigitsInArray = Number1.toString().split("");
//
const TheSumWrite = [...Number1DigitsInArray].map((e, i) => i < Number1DigitsInArray.length - 1 ? [e, ' + '] : [e]).reduce((a, b) => a.concat(b)).join('')

let TheSum =0;

for (let i = 0; i < Number1DigitsInArray.length; i++) {

  TheSum += Number(Number1DigitsInArray[i]);

}

console.log("---The Sum of",Number1,'Digits---');

console.log( TheSumWrite,'=',TheSum);
//---------------------------------------------------------------------------------


  //console.log(Math.ceil());  //rounds up to the closest integer 

   //console.log(Math.floor(2.6)); //rounds down to the closest integer 

  //console.log(Math.round(2.4));  //rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
//how to get decimal of a number mutiply number by 10
a=2.3
let numberofdigites
x=a*100;
 //console.log( x);
 //console.log(a.toString().length);

 //or use floor methode
 
 let w="2687.232342675875432558";
 const frac=w-Math.floor(w);
 let isolatedecimal = w.split('.')
 let thedecimal = BigInt(isolatedecimal[1]);
 let thedecimallen = BigInt(10**(isolatedecimal[1].length-1));
 //console.log(thedecimallen);
 //const decimalplaces = w.toString().length-Math.floor(w).toString().length -1;
 
/*function roundToTwo(num) {
    return +(Math.round(num + "e+"+decimalplaces)  + "e-"+decimalplaces);
}*/
 //console.log(Math.floor(w));
//console.log(Number(thedecimal/thedecimallen));
 //console.log(roundToTwo(frac));

 //console.log(decimalplaces);

//console.log(typeof("e+"+decimalplaces));

//console.log(0.1+0.2);



//if you want to reverse a number (or a string or a array using map)

let Num=4235433333;
let NumCopy = Num;
const Numlength = Num.toString().length;
let Numstring;
let NumReversed='';
for ( let i = 0; i < Numlength; i++) {
    
    Numstring=(NumCopy/10).toString().split('.');
    
    NumReversed+=Numstring[1];

    NumCopy=Numstring[0];
  
}
//console.log(Num,"reversed is",NumReversed);