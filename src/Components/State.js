import React, { useState } from 'react'

function State({props_val}) {
    const [order , setOrder]= useState("Tea is available or order the coffe")
    const [count ,setcount]= useState(0);
    const obj ={
        Gold:0,
        Silver:0,
       Bronze:0
    }
    const [ value,setvalue] = useState(obj)
    const [text , settext] = useState("")

    function OrderMymenu(){
        console.log(order);
        setOrder("Your coffee is ready")
    }
    function incrementby2(){
        setcount(prev_val=>prev_val+1)
        setcount(prev_val=>prev_val+1)
    }
    let {Gold, Silver,Bronze} = value

    const OrderGold =()=>{
        setvalue({...value ,Gold:value.Gold+1 })
    }
    const OrderSilver =()=>{
        setvalue({...value ,Silver:value.Silver+1 })
    }
    const OrderBronze =()=>{
        setvalue({...value ,Bronze:value.Bronze+1 })
    }


  return (
    <div>
        <button onClick={()=>{props_val("State")}}>Topic of current Page</button>
        <p>{order}</p>
        <button onClick={OrderMymenu}>Order Coffee</button>
        <br />
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>increment by one</button>
        <button onClick={incrementby2}>increment by two</button>
         <br />
         <h1>{Gold} ,{Silver} ,{Bronze}</h1>
        <button onClick={OrderGold}>Gold</button>
        <button onClick={OrderSilver}>Silver</button>

        <button onClick={OrderBronze}>Bronze</button>
        <br />
        <h4>{text}</h4>
        <input type="text" name="" value={text}  id="" onChange={(e)=>settext(e.target.value)} />
        <button onClick={()=>settext("")}>Clear</button>
        


    </div>
  )
}

export default State