//1  write a code to get array of names from given array of users
//2  Get back only active users
//3  Sort users by age desending 

const Array = [
    {
    "userId": 1,
    "id": 1,
    isActive : false,
    age :  24,
    "title": "Abhay"
    },
    {
    "userId": 1,
    "id": 2,
    isActive : true,
    age : 55 ,
    "title": "Ayush"
    },
    {
    "userId": 1,
    "id": 3,
    isActive : false,
    age : 87 ,
    "title": "Rupali"
    },
    {
    "userId": 1,
    "id": 4,
    isActive : true,
    age : 98 ,
    "title": "Swati"
    },
    {
    "userId": 1,
    "id": 5,
    isActive : false,
    age :  44,
    "title": "Naman"
    },
]

//  Solution 1 for loop

let names = []

// for(i=0;i<Array.length;i++){
//     if(Array[i].isActive){
//         names.push(Array[i].title)
//     }
    
// }
// console.log(names)


// Solution 2   For-Each-loop

// Array.forEach(user =>{
    // if(Array.isActive){
    //     names.push(user.title)
    // }
// } )

// console.log(names)

//  Solution 3   Map and Filter

//  const name1 = Array.filter(user => user.isActive)
// .sort((user1,user2)=> user1.age < user2.age ? 1 : -1)   // array sorting basis on age
// .map(user => user.title)
//  console.log("name1",name1)


//  Solution 4  Sort Method

// let Age = Array.sort((user1,user2)=> user1.age < user2.age ? -1 : 1)  // its assending order   add 1 : -1 is desending order
// console.log(Age)


// Spread 

let spread = {
    "id": 1,
    age :  24,
    "name": "Abhay"
    }

    let student = {
        ...spread,
        age:"55" ,
        name:"Ayush"                           // overright the object value or age value
    }
    console.log(student)