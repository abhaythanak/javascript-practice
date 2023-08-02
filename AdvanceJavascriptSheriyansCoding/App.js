// // higher order functions
// //aisa fun jo accept kare ek our fun in parameter  ya return karde ek our fun

// function abcd(){

// }

// abcd(function(){})

// //or  return 

// function abcd(){
//   return function(){}
// }

// abcd()

// // forEach is higher order fun

// let arr = [1,2,3,4,5]
// arr.forEach(function(){})

//   ========================================================================

// constructor fun

//normal fun jisme this ka istemaal ho and aap fun ko call karte waqqt new keyword ka use kare

//EX1
// function saachaBiscute(){
//     this.width = 12
//     this.height = 22
//     this.color = "brown"
//     this.taste = "sugary"
// }

// let var1 = new saachaBiscute()
// console.log(var1)

//   jab aapke pass aisa koi bhi mauka ho ke aapko ek jaise properties waale bahut saare elements banaane hai us waqt aap constructor fun use kar sakte ho

//EX2
// function Colorbtn(color){
//     this.radius = 12
//     this.height = 22
//     this.color = color
//     this.pressable = true
// }

// var var2 = new Colorbtn("red")
// var var3 = new Colorbtn("blue")

// console.log(var2,var3)

//==============================================================================

//first class fun
//aise fun jo normal value ya variables ki tara treat kartehe
// let first = function (){}


//==============================================================================

//new keyword
// new mens blank obj  create

// function abcd (){
//     this.age = 12
// }
//  new abcd()
// console.log( new abcd())
 //==============================================================================

 //iife  ==>  immediately invoked function expression

//  let ans = (function (){
//     let privateValue = 12;

//     return {
//         getter: function(){
//             console.log(privateValue)
//         },
//         setter: function(val){
//             privateValue = val;
//         }
//     }
//  })()


//==============================================================================

//prototype

// open console 
//var obj ={name:"Abhay"}
//when we enter obj  console show obj and next line show prototype it's a helper properties
// one extra property always given by javascript to every object

//==============================================================================
// one extra property always given by javascript to every object is called prototype inheritance
//prototypal inheritance

// let Human = {
//     name: "Harsh",
//     canFly: false,
//     canTalk: true,
//     willDie: true
// }

// let StudentSheriyans = {
//     solveJsQuestion: true,
//     createModernWebsite: true
// }
// //borrowed by Human 
// StudentSheriyans.__proto__= Human

// console.log(StudentSheriyans)



//==============================================================================

//this call apply bind

// function abcd(val1,val2,val3){
//     console.log(this)
//  }
// var obj = { age: 24 }

// abcd.call(obj,1,2,3)

//call

//Apply
// function abcd(val1,val2,val3){
//     console.log(this)
//  }
// var obj = { age: 24 }

// abcd.apply(obj,[1,2,3])


// bind
//  function abcd(){
//     console.log(this)
//  }
// var obj = { age: 24 }

// var bimdfun = abcd.bind(obj)
// bimdfun();



//==============================================================================
//pure & impure function

//impure

// function abcd(val){
//     return Math.random()*val
// }
// var v1 = abcd(2)
// var v2 = abcd(2)

// let vat = 12
// function abcd(a,b){
//     vat = 24
//     return a*b
// }
// abcd()

// abcd(2)

//pure

// function abcd(a,b){
//     return a*b
// }

// abcd(2)
//==============================================================================
//closures
//==============================================================================

