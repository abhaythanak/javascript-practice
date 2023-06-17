// const array = ["a","b","c","d"]
// const array1 = ["x","y","z","c"]

// const CommonItems = (arr1,arr2)=>{
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr1.length;j++) {
//             if(arr1[i]===arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }
// CommonItems(array,array1)

///  Good Approaches    ================================

const array = ["a","b","c","d"]
const array1 = ["x","y","z","c"]
const CommonItems1 = (arr1,arr2)=>{
    let map = {}
    for(let i = 0; i< arr1.length; i++){
        if(!map[array[i]]){
            const item = array[i]
            map[item] = true
        }
    }
console.log(map)                                                  ///this is time complexity 
    for(let j = 0; j< arr2.length; j++){
        if(!map[array1[j]]){
           return true
        }
    }
    console.log(map)
    return false
}
CommonItems1(array,array1)


//Another Approaches Readability

function CommonItems2(arr1,arr2){
    return arr1.some(item => arr2.includes(item))
}
CommonItems2(array,array1)