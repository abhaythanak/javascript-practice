//Problem Solving Frontend Basic
// 1. pangram String

// The Quick brown fox jumps over a lazy dog

// function check(str) {
//     const arr = new Array(26).fill(false)

//     let index;

//     for(let i = 0; i < str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "Z")
//           index = str.charCodeAt(i) - "A".charCodeAt(0)
//         else if (str[i] >= "a" && str[i] <= "z")
//           index = str.charCodeAt(i) - "a".charCodeAt(0)
         
//         else continue;
       
//         arr[index] = true;
//     }
//     for (let i = 0; i <= arr.length - 1; i++){
//         if (arr[i] === false) return false;
//     }
//     return true;
// }

// const result = check("The quick brown fox jumps over a lazy dog")
// console.log(result)

// Q2 Convert 12 hrs to 24 hrs

// const Convert = (time12)=>{
//    const [time, modifier] = time12.split(" ");

//    let [hour, minute] = time.split(":");

//    if (hour === "12") hour = "00";

//    if (modifier === "PM") hour = parseInt(hour) + 12;

//    return `${hour}:${minute}`;

// };
// console.log(Convert("04:02 PM"))

//Q3. "This" keyword output question

// const user = {
//     name: "Piyush",
//     greet() {
//         return `Hello, ${this.name}!`;
//     },
//     farewell: ()=>{
//         return `Goodbye, ${this.name}!`
//     },
// };

// console.log(user.greet())
// console.log(user.farewell())




//Q4. 

const PieChart = document.querySelector('.pie');

document.querySelector('#inputH').addEventListener("input",
(e)=>{
    PieChart.style = `--percentage:${e.target.value}%`
});