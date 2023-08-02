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

  //console.warn(Promise.resolve(5))

 //21

 //console.log('❤️' === '❤️');

 //22

 //JSON.parse();

// Parses JSON to a JavaScript value

//23
//  let name ='Abhay';
  
//  function getName() {
//     console.log(name);
//     let name = 'Thanak';
//  }
//  getName();

//24

// let name ='Abhay';
  
// function getName() {
//    console.log(name);
// }
// getName();

//25

//console.log(`${(x => x)('I love')} to program`)    //${} it's called template literal

//26

// function sumValues(x, y, z) {
//     return x + y + z;
// }
//console.log(sumValues(1,2,3))
//console.warn(sumValues(...[1, 2, 3]))
// A: sumValues([...1, 2, 3])
// B: sumValues([...[1, 2, 3]])
// C: sumValues(...[1, 2, 3])  right Ans
// D: sumValues([1, 2, 3])

//27

// const name = 'code step by step';
// console.warn(!typeof name === 'object');
// console.warn(!typeof name === 'string')
// console.warn(!typeof name === false )

//28

// const name = "Subscribe";
// const age = 21;

// console.warn(isNaN(name))
// console.warn(isNaN(age))

//29

// let person = { name: "Anil" };
// // how can modify person object

// Object.seal(person)
// person.name='Abhay'
// console.warn(person)

//30

// let data = [2, 9, 0, 10];
// // remove first element
// data.shift()

// console.warn(data)

//31

// let data = [2, 9, 0, 10];
// // remove last element
// data.pop()
// console.warn(data)

//32
//check any value is odd or even
// let a = 30;
// console.log(a%2)

//33
// let data = {name:"anil"}
// delete data.name;
// console.warn(data)

//34

// let data = "true";
// //convert data to boolean false value
// console.warn(!data)

//34
// let data = 'true';
// // convert data to boolean true value
// console.warn(data);

//34
//difference between map and forEach function 


//35
// let data = ["anil", "peter","bruce"];
// delete data[2];
// console.warn(data)

//36
// let data = ["anil", "peter","bruce"];
// delete data[2];
// console.warn(data.length)

//37
//merge two array
// let a = [1,2,3,4];
// let b = [4,56,7,8,9];

// let c = [...a,...b]
// console.log(c)  //c=[[1, 2, 3, 4, 4, 56, 7, 8, 9]]

//38
// let c = 3 ** 3;
// console.warn(c) //(3)^3 = 27


//39

// let a=2;
// setTimeout(()=>{
//     console.warn(a)
// },2000);
// a=100;

//40
// let a=2;
// let A=30;
// console.warn(A)

//41