// // add three number   -----------------------------------------------------

// function AddThreeNumber(a,b,c){
//   return a + b + c;
// }
// let no = AddThreeNumber(2,5,6)
// document.write(no)

// // Let , Const , Var    -------------------------------------------------

// // {}  -----> its a block
// //  var is --> Global Scope
// //  let -----> block scope
// //  const ----> block scope

// // Primitive Data Types & Objects ----------------------------------------

// //nn bb ss u -->

// // let a = null
// let b = 345
// let c = true; //or false
// let d = BigInt("567")
// let e = "Abhay"
// let f = Symbol("I am nice Symbol")
// let g = undefined
// // document.write(a,b,c,d,e,f,g)
// console.log(a,b,c,d,e,f,g)
// console.log(typeof d)

// //                           Objects  is non -primitive data types   ------------------
// const item = {
//     "Abhay": true,
//     "Shubh": false,
//     "Lovish": 67,
//     "Rohan": undefined
// }
// console.log(item["Abhay"])

//         Operator and Expression  ------------------------


//         Conditional expressions in JavaScript ------------------

let a = prompt("Hey whats your age?")
a= Number.parseInt(a)  // converting string to a number
// if(a>0){
//     alert("This is a valid age")
// }else {
//     alert("This is an invalid age")
// }
if(a<0){
    alert("This is an invalid age")
}else if(a<9){
    alert("you are a kid and you cannot think of driving")
}else if(a<18 && a>=9){
    alert("you are a kid and you cannot think of driving")
}else {
    alert("This is an invalid age")
}

document.write("you can",(a<18? "not drive" : "Drive"))  // or console.log