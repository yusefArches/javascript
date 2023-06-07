const arr = [];
const wheel = [0,1,2,3,4,5,6,7,8];
const newarr = [];
function tictactao(n){
for (let i = 1+n; i < 10+n; i++) {
    
    //this generates a random index between 0 & wheel.length afte having that index we get then
    //get the number of that index from wheel, so even after getting the some random index we get
    // a diffrent number from wheel because it gets mutated by the splice methode below.
    //this is all for playing random position and not getting the some position over again.

    randomindex = wheel[Math.floor(Math.random()*(wheel.length))]; 
    
    //this if statement is to get every player to playe one at a time
    if(i%2 === 0) arr[randomindex] = 'X';
    if(i%2 !== 0) arr[randomindex] = 'O';
    //this gets the index of the number randomundex that been choose to be removed
    //so it will not be choosed again
    const index = wheel.indexOf(randomindex);
     wheel.splice(index, 1);

}

arrcopy=[...arr]
while(arr.length>0) newarr.push(arr.splice(0,3));
    
console.log(newarr);
}

//so if you want 'X' to play first argm should be 1 or if you want 'O' arg should be 0
tictactao(1)


//break;

//now i have to write the stop mechanisim