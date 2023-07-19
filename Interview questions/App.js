//1

// let a=[];
// let b=[];

// console.warn(a==b)
// console.warn(a===b)

//2

// let a = [];
// let b = a;

// console.warn(a==b)
// console.warn(a===b)

//3

// let a = [20];
// let b = [20];

// console.warn(a[0]==b[0])
// console.warn(a[0]===b[0])

//4

// let z= [1,2,3,4]
// let a = {name : "anil"};
// console.warn(...z)

//5

// console.warn(typeof NaN)  //not a number

//6

// let data = 10 - -10;
// console.warn(data)

//7

// const set = new Set([1,1,2,3,4])   //Set remove duplicate character
// console.warn(set)

//8

// const data = { name : "Anil"};
// console.warn(delete data.name)  //op true  means its deleted
// console.warn(data)

// 9

// const data = { name : "Anil"};
// console.warn(delete data)  // false its not deleted
// console.warn(data)

//10

// const data = ["peter","anil","sam"]
// const [y,z] = data;
// console.warn(y,z)

// 11
// const data = ["peter", "anil","sam"]           // how to get second value
// const[,y] = data
// console.warn(y)

// 12
// const data = { name: "anil", age:26, skill:"JS"}   // how to get name without .(dot) operator
// const {age} = data
// console.warn(age)

//13

// let data = { name: "anil", age: 29, skill:"JS"}
// let info = { city: "Noida", mail:"anil@test.com"};
// // merge 2 object
// data = {...data,...info}
// console.warn(data)

//14

// let data = { name: "anil", age: 29, skill:"JS"}
// let info = { city: "Noida"}

// data = {data,...info}
// console.warn(data)

//15

// let data = { name: "anil", age: 29, skill:"JS"}
// let info = { city: "Noida", skill:"Node"};
// data = {...data,...info}
// console.warn(data)

//16

// const name = "Anil";
// console.warn(name())

//17

// const result = false || {} || null;
// console.warn(result)  // {}  obj is true obj is o/p

//18

// const result = false || null || '';   //last value as o/p if its '', null or false
// console.warn(result)

//19

// const result = [] || 0 || true;   // this case if first value is true its return first value not goes to other values
// console.warn(result)

//20

 console.warn(Promise.resolve(5))

 //21