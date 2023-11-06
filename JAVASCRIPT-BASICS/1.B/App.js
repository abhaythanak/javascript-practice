// const fixed = 'hello'
// let rechange = 'Hola'
// var deprecated = 'Shole'

// console.table([fixed, rechange, deprecated]);

// "use strict";  //treat all JS code as newer version 

// null ==> standalone value

// objects
// console.log(typeof null)   //====> its an objects
// function findLargestNumber(...arr) {
//     return Math.min(...arr);
//   }
// console.log(findLargestNumber(1,54,78,89,6,99))  
function countVowelsAndConsonants(str) {
    const vowels = str.match(/[aeiouAEIOU]/g) || [];
    const consonants = str.match(/[^aeiouAEIOU\s\W]/g) || [];
    return {
      vowels: vowels.length,
      consonants: consonants.length,
    };
  }
  
  // Example usage:
  const text = "Hello, World!";
  const counts = countVowelsAndConsonants(text);
  console.log(`Vowels: ${counts.vowels}, Consonants: ${counts.consonants}`);
  