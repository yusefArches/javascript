var Colors = ['red','orange','yellow','green','blue','purple','pink',
'brown','black','cyan','Acid green','Firebrick','Deep cerise','Ecru'];

//my mthode is only correct to the first letter

function AlphabeticOrderSortingAlgorithm(Words) {
    
    var WordsinAlphapitcalOrder =[]; 
    
    const Alphabet='abcdefghijklmnopqrstuvwxyz';
    
    //this is stupid
    //turn array to a string then lowercase it put it again in array then get first letter
    //const WordsfirstLetters = Words.toString().toLowerCase().split(',').map(word => word.charAt(0))
    
    //this is better
    //get the first letters of every word then lowercase them
    //because map() gets element at a time of array and (in this case the elements are word aka string)
    //and gets first letter of it using charAt(0) and lowercase it
    //then map() spits it back in a array
    const WordsfirstLetters = Colors.map(word => word.charAt(0).toLowerCase())

    console.log(WordsfirstLetters);

for (i = 0; i < Alphabet.length; i++) {

   for (j = 0; j < WordsfirstLetters.length; j++) {
    
    if (WordsfirstLetters[j]==Alphabet[i]) 
    
    WordsinAlphapitcalOrder.push(Colors[j]);
    
   }
    
}
    console.log("----------My Methode----------");
    console.log(WordsinAlphapitcalOrder);
}


AlphabeticOrderSortingAlgorithm(Colors);

//------------------using sort() methode-------------------

console.log("----------Only Sort()----------");
console.log(Colors.sort()); // sort alone puts UpperCase words before lowerCase

//to solve this we have two solution
//use map() to lower or upper case the whole array

//map() creates a new array from calling a function for every array element.

var Maplowercase = Colors.map(lowercase);

function lowercase(element) {
    return element.toLowerCase();
}
//console.log(Maplowercase);

var sorted = Maplowercase.sort();

//the concise version

console.log("-------Sort() & map()------");
console.log(Colors.map(element => element.toUpperCase()).sort());

//or use localeCompare() 

//localeCompare() compares two strings in the current locale.

//localeCompare() returns sort order -1, 1, or 0 (for before, after, or equal).

//so localeCompare() compares the whole element of the array 2 by 2 then sort() sortes them from biggest to smallest

console.log("----Sort() & localeCompare()----");
console.log(names.sort((a, b) => a.localeCompare(b)));