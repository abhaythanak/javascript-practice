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

const isAnagaram = (s, t)=>{
 s = s.toLowerCase().split("").sort().join("")
 t = t.toLowerCase().split("").sort().join("")
 return s === t;
}
 console.log(isAnagaram("Anagram", "nAgaram"))