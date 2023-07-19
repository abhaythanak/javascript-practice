// the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {
    //
    fetch(url);
    .then((resp)=>{
        console.log(resp)
    })
    .then()
    .catch()
}