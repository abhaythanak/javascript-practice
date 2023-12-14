console.log('hello')

const product = [
    {id:1, name: 'laptop', price: 199, inStock: false},
    {id:2, name: 'sony', price: 725, inStock: true},
    {id:3, name: 'laptop', price: 325, inStock: false},
    {id:4, name: 'phone', price: 585, inStock: true},
    {id:5, name: 'laptop', price: 225, inStock: false},
    {id:6, name: 'tv', price: 925, inStock: true}
]
const IT = [...product].sort((a,b)=> a.price - b.price) //desending order b.price - a.price
console.log(product,IT)