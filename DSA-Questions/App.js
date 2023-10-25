//1) isPalindrome
// input: x = 121 / reverse 121   ------>>>>> true
// input: x = 10  / reverse 01  ------->>>>> False

// let isPalindrome = (x)=>{
//   return x < 0 ? false : x === +x.toString().split("").reverse().join("")
// }
// const res = isPalindrome(-121)
// console.log(res)

//2) Fibonacci Number/ series

// const fib = (n)=>(n <= 1 ? n : fib(n-1) + fib (n-2))

// const res = fib(5)
// console.log(res)

//3)  Anagram valid
// Input : "anagram" === nagaram
// Input : "rat" === car

// const isAnagaram = (s, t)=>{
//  s = s.toLowerCase().split("").sort().join("")
//  t = t.toLowerCase().split("").sort().join("")
//  return s === t;
// }
//  console.log(isAnagaram("Anagram", "nAgaram"))

//4)  two sum
// ex. (1,5,8,9,8,7)  two nums its addition is 6 which no. is that?

const sum = (num, target)=>{
    for (let i = 0; i < num.length; i++) {
        for (let j = i+1; j < num.length; j++) {
            if(num[i]+num[j] === target)
            return [i,j]
            
        }
        
    }
}
console.log(sum([1,5,8,9,8,7], 6))