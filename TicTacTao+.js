const arr = ['','','','','','','','',''];
const wheel = [0,1,2,3,4,5,6,7,8];
const newarr = [];
const arrXsol = [0,0,0,0,0,0,0,0,0];
const arrOsol = [0,0,0,0,0,0,0,0,0];
let Winner;

function main(n) {
    
for (let i = 1+n; i < 10+n; i++) {

    randomindex = wheel[Math.floor(Math.random()*(wheel.length))]; 

    if(i%2 === 0) {arr[randomindex] = 'X'; arrXsol[randomindex]=randomindex+1;}
    if(i%2 !== 0) {arr[randomindex] = 'O'; arrOsol[randomindex]=randomindex+1;}

    const index = wheel.indexOf(randomindex);
     wheel.splice(index, 1);

     let winX = winpos(arrXsol, 1);
     if(winX===1) break;
     let winO = winpos(arrOsol, 0);
     if(winO===1) break;
     
}

showresult(arr)
}

function winpos(arrXO,XorO) {

    if( arrXO[4]){
        if(arrXO[0]&&arrXO[8]||arrXO[1]&&arrXO[7]||arrXO[2]&&arrXO[6]||arrXO[3]&&arrXO[5]){

         Winner= XorO && 'X' || 'O'; 
         return 1;
        
    }
    }
    if(arrXO[0]){
        if(arrXO[1]&&arrXO[2]||arrXO[3]&&arrXO[6]){
        {
            Winner= XorO && 'X' || 'O'; 
            return 1;
        }
    }}
    if(arrXO[8]){
        if(arrXO[2]&&arrXO[5]||arrXO[6]&&arrXO[7]){
        
        Winner= XorO && 'X' || 'O'; 
        return 1;
    }
    }  
}

function showresult(arrfin){

    while(arrfin.length>0) newarr.push(arrfin.splice(0,3));
    delete arrfin;  
    console.log(newarr);
    delete newarr;
    if(Winner!==undefined)
    console.log("the Winner is",Winner);
    else console.log("it's a tie");
    delete Winner;
}

//so if you want 'X' to play first choose 1, if you want 'O' choose 0.

main(1)

