import { useState } from "react"

let a = [1,2,3,4,5,6]

export default function Interview() {
const [num, setNum] = useState(0)

const handlePre = ()=>{
  if(num === 0){
    setNum(a.length - 1)
  }else{
    setNum(num-1)
  }
 
}

const handleNext = ()=>{
    setNum((num+1)  % a.length)
}

    return(
        <>
          <h1 className="flex justify-center items-center font-extrabold text-6xl">Interview</h1>
          <div className="flex justify-center items-center m-5">
          <button onClick={handlePre}>pre</button>
          <p className="m-7">{a[num]}</p>
          <button onClick={handleNext}>next</button>
          </div>
        </>
    )
}
