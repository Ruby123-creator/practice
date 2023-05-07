import React,{useState} from 'react'

function Login({login}) {
    let [name , setname] = useState("")
    let [password , setpassword] = useState("")
  return (
    <div>
        <h3>Login Page</h3>
        <form action="">
            <input type="text" name="" placeholder=' Enter username' id="" onChange={(e)=>setname(e.target.value)} />
            <br />
            <input type="password" name="" placeholder='Enter pasword' id="" onChange={(e)=>setpassword(e.target.value)} />
            <br />
            <button onClick={()=>login(true)}>Login</button>
        </form>
    </div>
  )
}

export default Login