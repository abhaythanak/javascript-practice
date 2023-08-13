// 1. give  a string, reverse each word in the sentence

// let str = "Abhay kese ho"
// let saveStr = str.split(" ")
// .map((word) => {
//    return word.split("").reverse().join("")
// });

// console.log(saveStr.join(" "));

//2. how to check if an object is an array or not ? Provide some code.

// function IsArray(num){
//     return Array.isArray(num)
// }

// console.warn(IsArray({}))
// console.warn(IsArray([]))

//3. How to empty an array in JavaScript?

// let arr = [1,2,3,4,5,6,7]
// arr.length = 0
// console.log(arr.length)




//4. How would you check if a number is an integer?

// without using isInteger function
// EX 1.
//  let Number = 12;
//  if (number%1 === 0) {
//     console.log("integer")
//  }else {
//     console.log("not !")
//  }
 
// ex 2 .  in console
// Number.isInteger(12)





//5. Make this work :
// |Duplicate([1,2,3,4,5]);  // [1,2,3,4,5,1,2,3,4,5]

let a = [1,2,3,4,5]

//1 console.warn(a.concat(a))

// 2 function Duplicate (arr) {
//     return arr.concat(arr)
// }

// console.warn(Duplicate(a))




//function
//====================================

//6. Write a JavaScript function that reverse a number

// function Reverse(num){
//     return Number(num.toString().split("").reverse().join(""))
// }
// console.log(Reverse(12))

// function Reverse(num){

//     let rev = 0
//     while(num>0){
//         let rem = num%10
//         rev = rev*10+rem
//         num = Math.floor(num/10)
//     }
//     return rev
// }
// console.log(Reverse(123456))



//7. Write a JavaScript function that checks whether a passed string is palindrome or not

// function palindromeCheck(str){
//     let reversed = str.split("").reverse().join("");

//     // if(reversed === str) return true ;
//     // else return false;
//     //   OR
//     return reversed === str
// }
// console.warn(palindromeCheck("poop"))
// console.warn(palindromeCheck("loop"))

// 8. Write a JavaScript Function that returns a passed string with letters in alphabetical order 

// function AlphabeticOrder(str){
//    return str.split("").sort().join("")
// }
// console.log(AlphabeticOrder("ball"))
// console.log(AlphabeticOrder("apple"))




//9. Write a JavaScript function that accepts a string as a parameter and converts the 
//    first letter of each word of the string in upper case

// function capitalize (str) {
//     let All = str.split(" ").map((word)=>{
//      return   word.charAt(0).toUpperCase() + word.substring(1)
//     })
//     return All.join(" ")
// }

// console.warn(capitalize("first letter of each word"))

// 10. Write a Javascript function to get the number of occurrences of each letter in specified strings


LOOP

------------------------------

Loop an array and add all members of it

in an array of numbers and Strings, only










