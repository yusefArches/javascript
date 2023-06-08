const arr = ['','','','','','','','',''];
const wheel = [0,1,2,3,4,5,6,7,8];
const newarr = [];
const arrXsol = [0,0,0,0,0,0,0,0,0];
const arrOsol = [0,0,0,0,0,0,0,0,0];
let Winner;

function tictacto(n) {
    
for (let i = 1+n; i < 10+n; i++) {

    randomindex = wheel[Math.floor(Math.random()*(wheel.length))]; 
    
    if(i%2 === 0) {arr[randomindex] = 'X'; arrXsol[randomindex]=randomindex+1;}
    if(i%2 !== 0) {arr[randomindex] = 'O'; arrOsol[randomindex]=randomindex+1;}
    
    const index = wheel.indexOf(randomindex);
     wheel.splice(index, 1);

    if( arrXsol[4]){
        if(arrXsol[0]&&arrXsol[8]||arrXsol[1]&&arrXsol[7]||arrXsol[2]&&arrXsol[6]||arrXsol[3]&&arrXsol[5]){
        Winner='X'; break;}
    }
    if(arrXsol[0]){
        if(arrXsol[1]&&arrXsol[2]||arrXsol[3]&&arrXsol[6]){
        {Winner='X'; break;}
    }}
    if(arrXsol[8]){
        if(arrXsol[2]&&arrXsol[5]||arrXsol[6]&&arrXsol[7]){
        Winner='X'; break;}
    }
    if( arrOsol[4]){
        if(arrOsol[0]&&arrOsol[8]||arrOsol[1]&&arrOsol[7]||arrOsol[2]&&arrOsol[6]||arrOsol[3]&&arrOsol[5]){
        Winner='O'; break;}
    }
    if(arrOsol[0]){
        if(arrOsol[1]&&arrOsol[2]||arrOsol[3]&&arrOsol[6]){
        Winner='O'; break;}
    }
    if(arrOsol[8]){
        if(arrOsol[2]&&arrOsol[5]||arrOsol[6]&&arrOsol[7]){
        Winner='O'; break;}
    }
}

while(arr.length>0) newarr.push(arr.splice(0,3));

console.log("-----TicTacTao-----");
console.log("-----CPU.vsCPU-----");

console.log(newarr);

if(Winner!==undefined)
console.log("the Winner is",Winner);
else console.log("it's a tie");

}

//so if you want 'X' to play choose 1, if you want 'O' choose 0.

tictacto(0)
