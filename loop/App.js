//   For Loops  ---------------------

// for(let i=0; i<10; i++){
//     console.log(i)
//     document.write(i)
// }
// let sum = 0 
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for(let i = 0; i<n; i++){
//     sum += i
//     console.log(i)
// }
// console.log("sum of first"+n+"natural number is"+ sum)


//   For-in Loops  ----------------------------------

// let obj = {
//     harry:90,
//     shubh:45,
//     shivila:56,
//     ritika:57,
//     shiv:23
// }
// for (let a in obj){
//     console.log("Marks of " + a + " are " + obj[a])
// }

//   For-of Loops  ----------------------------------
//  for(let b of "Abhay"){
//     console.log(b)
//  }


// While Loops  ------------------------------------------
// while will crash the system condition is true remove i++ 
// let n = prompt("enter the value of n")
// n = Number.parseInt(n)

// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }

//Do While Loops  ------------------------------------------

//minimum one time execute
// let n = prompt("enter the value of n")
// n = Number.parseInt(n)

// let i = 10;
// do {
//     console.log(i)
//     i++;
// }while(i<n)

//   function in javascript    ----------------------

const hello = (x,y,z) =>{
    return console.log( Math.floor(x+(y + z) /2))
}
hello(1,25,50)



