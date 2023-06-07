x=1;
y=0;

for(i=0,j=1;i<100;i=i+x,j=j+y){
    
   x=x+i;
   y=y+j;
   /*the \n is for new line only works in nodejs not in browser so this is
   the equavilant of console.log(x); console.log(y);*/
   
   console.log(x,'\n'+y);
  

}

fibonacci=[];
x=1;
y=0;
for(i=0,j=1;i<100;i=i+x,j=j+y){
    
    fibonacci.push(x=x+i,y=y+j)
 }
 console.log(fibonacci);



fibonacci=[0,];
x=1;
i=0;
 while (i<3) {
    /*x=i+x;
    console.log(x);
    i=i+x;
    console.log(i);*/
    fibonacci.push(x=x+i,i=x+i);
    
}
console.log(fibonacci)
x=0;

for(i=1;i<100;i+=x){
    
    console.log(i);
    
    x+=i;

   console.log(x);
  
}

//solved with recursion
function fibonacciofn(n) {
    fib=[0,1];
    
    for ( i = 2; i < n; i++) {
        fib[i]=fib[i-1]+fib[i-2];
        
    }
    return fib;

}

console.log(fibonacciofn(15));

   
