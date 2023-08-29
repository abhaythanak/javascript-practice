let bttn = document.getElementById("btn")
let bb = document.getElementById("bulb")
bttn.addEventListener('click', toggleBulb)

function toggleBulb(e){
//    bb.src = "https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png"
   if(bttn.textContent.includes('on')){
    bb.src = "https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png"
    bttn.textContent = "Turn off"
   }else{
    bb.src = "https://www.freeiconspng.com/thumbs/bulb/clip-art-yellow-light-bulb-png-8.png"
    bttn.textContent = "turn on"
   }
}