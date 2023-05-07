import React, { useCallback, useMemo } from 'react'
import { useState } from 'react';
function Usememo() {
  const [count , setcount] = useState(1)
//   const Factorial =()=>{
//     return CalculateFactorial(count);
//   }
   const [text , setText] = useState("")
// const Factorial =useMemo(()=>{
//     return CalculateFactorial(count)
// },[count])

const Factorial =useCallback(()=>{
    return CalculateFactorial(count)
},[count])
  return (
    <div>
        <input type="text" name="" id="" onChange={(e)=>setText(e.target.value)} />
        <DisplayName text ={text}/>
        <br />
        <br />
       <button onClick={()=>setcount(count+1)}>Increment</button>
       <button onClick={()=>setcount(count-1)}>decrement</button>
       <br />
       <h2>The factorial of a {count} is {Factorial()}</h2>

    </div>
  )
}


const DisplayName =React.memo(({text})=>{
    console.log("rendered")
    return(
        <div>
            <h3>My name is {text}</h3>
        </div>
    )
})

function CalculateFactorial(num){
   if(num<=0){
    return 1;
   }
   return  num*CalculateFactorial(num-1)
}

export default Usememo