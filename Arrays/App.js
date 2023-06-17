// let Marks = [21,87,856,522,465,4,655,3,3,"This the End"]

// for(let i = 0; i< Marks.length; i++){
//     console.log(Marks[i])
// }

// let c = Marks .join("-*-/++")
// console.log(c,typeof c)

// //         Arrays Methods  ==============================

// // let r= Marks.pop() //remove the end element
// // let r= Marks.push(54) //Add the end element
// // let r= Marks.shift(54) //remove the First element
// let r= Marks.unshift(2) //Add as the First element
// console.log(Marks,r)

// Delete is Operator
//  let num = [1,2,3,4,5,6,7,8,9,0] 
//  let max = [11,22,33,44,55,66,77,88,99,00]
// //  console.log(num.length)
// //  delete num[0]
// //  console.log(num)
// //  console.log(num.length)

// let array = num.concat(max) // concat combine two arr. & create new arr.
// console.log(array)
// console.log(num,max)

// Sort Method ====================================

// decending order=> 9876543210
// let compare = (a,b) =>{
//     return b-a
// }

// Assending Order => 0123456789
let compare = (a,b) =>{
    return a-b
}

// let num = [0,9,8,7,6,5,4,3,2,1] 
// num.sort(compare)  //sort as alphabetic order Compare function using 
// num.reverse()  // reverse the order 

// console.log(num)  


//  Splice  and  Slice
// let num = [0,9,8,7,6,5,4,3,2,1] 
// let deleteValuesShow = num.splice(1,2,1021,1022,1023,1024)
// console.log(num)
// let deleteValuesShow1 = num.splice(0,12,1021,1022,1023,1024)
// console.log(num)
// console.log(deleteValuesShow)
// console.log(deleteValuesShow1)

//    Slice =============================================
   const num = [0,1,2,3,4,5,6,7,8,9]
  let newSlice= num.slice(8)
   console.log(num)
   console.log(newSlice)