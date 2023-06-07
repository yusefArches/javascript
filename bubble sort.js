count=0
array=[996,709,898,790,588,476,264,222,134,87,43]
console.log(array.length);
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-i-1; j++) {
        //console.log(array[i],array[j]);
        if (array[j]>array[j+1]){
        temp=array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
        //console.log(array);
        count=count+1;
        }
        count=count+1;

    }
    count=count+1;
}
console.log("O(n²) is",array.length+"² ≈",count);
console.log("final",array);
