/*Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.*/

//Example 1:kk
let X
let Solutions=[];
var fizzBuzzz = function(n) {
    //var Solutions=Array.from({ length: n });
    for(i=1;i<=n;i++){
        if (i%15===0) Solutions.push(i+" il peut se diviser sur 3 et 5");
        else if(i%3===0) Solutions.push(i+" il peut se diviser sur 3");
        else if(i%5===0) Solutions.push(i+" il peut se diviser sur 5");
        else Solutions.push(i.toString());

}
return Solutions;
}

var fizzBuzz = function(n) {
    //var Solutions=Array.from({ length: n });
    for(i=1;i<=n;i++){
Solutions[i-1]=i%15==0&&"FizzBuzz"||i%3==0&&"Fizz"||i%5==0&&"Buzz"||i.toString()

}
console.log(Solutions);
}

var fizzBuzz = function(n) {
    var Solutions=Array.from({ length: n });
    
    for(i=0,j=1;i<n;i++,j++){
        if ((!(j%3)&&!(j%5))==1) Solutions[i]="FizzBuzz";
        else if(j%3==0) Solutions[i]="Fizz";
        else if(j%5==0) Solutions[i]="Buzz";
        else Solutions[i]=j.toString();

}
//return Solutions;
}

console.log(fizzBuzzz(20));

let output;
for(i=1;i<=20;i++){
    
    output='';

    if (i%3==0) output+='fizz';
    if (i%5==0) output+='buzz';
    if (!output) output = i;
    
    console.log(output);

}


//const condition = { 3: "Fizz", 5: "Buzz" };
const condition = [ [ '3', 'Fizz' ], [ '5', 'Buzz' ] ]
for (let i = 1; i <= 20; i++) {
  //let answer = Object.entries(condition).map(([key, value]) => i % key === 0 ? value : "").join("");
    let answer = condition.map(([key, value]) => i % key === 0 ? value : "").join("");
   
  if (!answer) answer = i;
  console.log(answer);
  
}

//let col = 4 % condition[0][0] === 0 ?  condition[1][1]: "nothing";

//console.log(col);

console.log("-------------------------------");

//this is alternating 0 & 1 for odd & even integers
console.log((2%2===0) *1);

const conditionn = [ [ '3', 'Fizz' ], [ '5', 'Buzz' ] ]
for (let i = 1; i < 20; i++) {
    let answer='';
    answer += (i % conditionn[(i%2===0)*1][0] === 0 ?  conditionn[(i%2===0)*1][1]: "");
    answer += (i % conditionn[(i%2!==0)*1][0] === 0 ?  conditionn[(i%2!==0)*1][1]: "");
    if (!answer) answer = i;
    console.log(answer);

}