//Q1 logical operator find age lies btwn 10and 20

// let age = prompt("what is your age")

// if(age>10 && age<20){
//     document.write("Your age is lies between 10 and 20")
// } else {
//     document.write("your age is doesn't lies between 10 and 20")
// }

//Q2 demonstrate the use of switch case statement in javascript?

// let age = prompt("what is your age")

// switch(age){
//     case '12':
//         document.write("your age is 12")
//         break
//     case '13':
//         document.write("your age is 13")
//         break
//     case '14':
//         document.write("your age is 14")
//         break
//     case '15':
//         document.write("your age is 15")
//         break
//     default :
//          document.write("your age is not special")
//     }

//Q3  write program to find whether a number is divisible by 2 and 3

// let age = prompt("what is your age?")
// age = Number.parseInt(age)
// if(age%2==0 && num%3==0){
//     console.log("your age is devided by 2 & 3")
// }else{
//     console.log("your age is not devided by 2 & 3")
// }
// document.write(age)
// console.log(age)

//Q4 number is devided by either 2 && 3
 
// let age = prompt("what is your age?")
// age = Number.parseInt(age)
// if(age%2==0){
//     console.log("your age is devided by 2")
// }else if(age%3==0){
//     console.log("your age is devided by 3")
// } else{
//     console.log("your age is not devided by 2 & 3")
// }
// document.write(age)
// console.log(age)

//Q5 using ternary operator age greater than 18  u can drive or cannot drive?
let age = 20
let a = age > 18 ? "you can drive" : "you cannot drive" 
console.log(a)
