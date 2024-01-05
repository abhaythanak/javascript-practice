// call, apply, bind

let printName = function(){
    console.log(this.name + this.lastname)

}
let name = {
    name: "abhay",
    lastname: "thanak",
}

let name1 = {
    name: "akshay",
    lastname: "patrhan",
}
printName.call(name)