let Btn = document.querySelector("button")
let para = document.querySelector("p")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")


// Btn.addEventListener("click",function(){
//  para.textContent = "kya haal he"
// }) 

Btn.addEventListener("click",function(){
   let src1 = img1.src
    let src2 = img2.src

    img1.src = src2
    img2.src = src1
})