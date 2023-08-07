//  if your using this means your using async javascript code
// setInterval
// setTimeout
// Promise
// fetch
// axios
// XMLHttpRequest

//===============================================================
// EX.1
// function abcd() {
//     fetch(`https://randomuser.me/api/`)
//     .then(function (raw) {
//         return raw.json();
//     })
//     .then(function (data) {
//         console.log(data)
//     })
// }

// abcd()

// EX2
async function abcd() {
    let raw =   await fetch(`https://randomuser.me/api/`)
    
    let ans = await raw.json()

    console.log(ans)
}
abcd()