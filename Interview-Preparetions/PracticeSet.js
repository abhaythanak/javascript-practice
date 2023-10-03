//   for (var i = 0; i<5; i++){
//    var a= function(i){
//         setTimeout(function(){
//         console.log(i);
//     },i * 1000)
//     }
//     a(i)
    
//   }
// var x = 21

// var fun = function (){
//     console.log(x)
//     var x = 20
// }
// fun();

// function F(a){
//     return function(b){
       
//         if (b) {
//             return F(a+b);
//        }else { return a;}
      
//     }   
// }
// console.log(F(2)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)(3)());

// function fetch1(){
//   fetch(`https://randomuser.me/api/`)
//   .then(res => res.json())
//   .then(data => console.log(data) )
// }
// fetch1()

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(res=> res.json())
//     .then(data=> console.log(data))

// }
//   abcd();

//  async function abcd(){
//     try {
//         let res = await fetch(`https://randomuser.me/api/`)
//         let data = await res.json();
//         console.log(data)
        
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// abcd();
let arr = [4, 8, 6, 7, 32, 2];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i]>arr[j]){
//             let temp = arr[i]
//             arr[i]= arr[j]
//             arr[j]= temp;
//         }

        
//     }
    
// }
// Array.prototype.AbhaySort = function(cb){
//     for (let i = 0; i < this.length; i++) {
//     for (let j = 0+i; j < this.length; j++) {
//         if (cb(this[i],this[j])>0){
//             let temp = this[i]
//             this[i]= this[j]
//             this[j]= temp;
//         }

        
//     }
    
// }
// }
function Abhay (i,cb){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (cb(arr[i],arr[j])>0){
                let temp = arr[i]
                arr[i]= arr[j]
                arr[j]= temp;
            }
    
            
        }
        
    }
}

 Abhay(arr,(i,j)=> i-j);
 console.log(arr)