// iife
//  (function (x){
//    return (function (y){
//     console.log(x)
//     console.log(y)
//    })(2)
//  })(1)

function evaluate(op){
    return function(a){
        return function(b){
            if(op === 'sum') return a+b;
            else if(op === "mul") return a * b;
            else if(op === 'dev') return a / b;
            else if(op === 'sub') return a - b;
        }
    }
}
console.log(evaluate("sum")(30)(10))
// function Scope
// for (var i = 0; i < 5; i++){
//     setTimeout(function(){
//         console.log(i)
//     })
// }
// console.log(x)
// console.log(z)
// var x = 10;
// const z = 20;
 
// var x = 21;
// var fun = function(){
//     console.log(x)
//     var x = 30
// }
// fun()
// op ==> undefined
// const fn = (a, x, y, ...number)=>{
//     console.log(x,y)
// }
// fn(1,23,4,8,6,88,9)

// callback fun
// document.addEventListener("click",function(p){
    //call fun inside another fun
// })

// shadowing
// let count = 0;
// function print(){
//     if(count === 0){
//         let count = 5;
//         console.log(count)
//     }
//     console.log(count);
// }
// print()

//constructor fun
// function ABC(){
//     //or   "use strict"
//     console.log(this)
// }
// const abc = new ABC()
// const abc2 = new ABC()
// console.log(abc === abc2)

// const a ={
//     abc: function(){
//         console.log(this)
//     }
// }
// const x = a.abc
// x()

// const a = {
//     b: 10,
//     c: function(){
//         return this.b + 10;
//     }
// }

// const d = {
//     e:20,
// };
// const combined = {...a,...d}
// console.log(combined)


    // EX.1
// function abcd() {
//     fetch(`https://randomuser.me/api/`)
//     .then(function (raw) {
//         return raw.json();
//     })
//     .then(function (data) {
//         console.log(data)
//     })
// }

// abcd()

// EX2
// async function abcd() {
//     let raw =   await fetch(`https://randomuser.me/api/`)
    
//     let ans = await raw.json()

//     console.log(ans)
// }
// abcd()

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(res=> res.json())
//     .then(data=> console.log(data))

// }

// async function abcd(){
//     try{
//         const res = await fetch(`https://randomuser.me/api/`)
//     const data = await res.json()
//     console.log(data)
//     } catch{
//         console.log("error")
//     }

// }
// abcd()

//call
function abcd(val1,val2,val3){
    console.log(this)
 }
var obj = { age: 24 }

abcd.call(obj,1,2,3)



//Apply
function abcd(val1,val2,val3){
    console.log(this)
 }
var obj = { age: 24 }

abcd.apply(obj,[1,2,3])


//bind
 function abcd(){
    console.log(this)
 }
var obj = { age: 24 }

var bimdfun = abcd.bind(obj)
bimdfun();

//  custom Map ,Filter and Reduce

//Polyfill for map
  Array.prototype.AbhayMap= function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
        
    }
    return temp;
  }

  //Polyfill for filter
  Array.prototype.AbhayFilter= function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) temp.push(this[i])
        
    }
    return temp;
  } 


  //Polyfill for reduce
  Array.prototype.AbhayReduce= function(cb,initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
        
    }
    return temp;
  }