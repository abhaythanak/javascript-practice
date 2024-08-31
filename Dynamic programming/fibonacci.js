// fibonacci

function Fib (n,rlt={}){
    if (n in rlt) return rlt[n]; 
    if (n<=2) return 1 ;
    rlt[n] = Fib(n-1,rlt) + Fib(n-2,rlt)
    return rlt[n]
}

console.log(Fib(70))

function Fib(n) {
    if (n <= 2) return 1;

    let a = 1, b = 1;
    
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

console.log(Fib(80));
