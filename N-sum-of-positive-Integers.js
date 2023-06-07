var SigmaSum="still not calculated";

console.log(SigmaSum);

var numbers = [32, 29, 67, 97, 04];

function NsumofpositiveInt(Order,n) {
    
    SigmaSum = ((n*n)+n)/2;
    console.log(Order+".Sum of Z⁺ from 1 to "+n+" equals", SigmaSum);
}

for(i=0; i<numbers.length; i++){

NsumofpositiveInt(i+1, numbers[i]);

}

function NsumofpositiveIntRandom(a,n=Math.floor(Math.random() * a) + 1) {
    
    SigmaSum = ((n*n)+n)/2;
    console.log("Sum of Z⁺ from 1 to "+n+" equals", SigmaSum);
}

NsumofpositiveIntRandom(87)

//SOLUTION USING LOOP
var result=0;
number=32;
for (i = 1; i <=number ; i++) {
    result+=i;
}
console.log("Sum of Z⁺ from 1 to "+number+" equals", result);