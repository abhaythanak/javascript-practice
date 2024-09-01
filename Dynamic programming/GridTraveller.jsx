//  GridTraveller

function Grid(m,n,memo={}){
let key = m+ ',' +n
if (key in memo) return memo[key]; 

if (m===1 && n===1) return 1;
if (m===0 || n===0) return 0;

return memo[key] = Grid(m-1,n,memo) + Grid(m, n-1,memo)
}
console.log(Grid(30,30))