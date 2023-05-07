import React, { useRef ,useState} from 'react'

function Useref() {
  //It is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component. 
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.

  // The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue).
    const [msg ,setmsg] = useState("")
    const inputs = useRef();
    const fun1 =()=>{
        console.log("hello");
       console.log(inputs)
       console.log(inputs.current);
       setTimeout(()=>{
        alert("your message send successfully")
       },1000)
       inputs.current.focus();
       inputs.current.style.border = "2px solid green"
       setmsg("")
    }
  return (
    <div>
        <h1>Useref</h1>
        <label htmlFor="">Text me on whatsappp</label>
        <input type="text" value={msg} ref={inputs} onChange={(e)=>setmsg(e.target.value)} />
        <br />
        <span>{msg}</span>
        <button onClick={fun1}>Send</button>
    </div>
  )
}

export default Useref