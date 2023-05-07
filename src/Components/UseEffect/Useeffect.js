import React, { useEffect, useState } from 'react'
import UserList from './UserList';

function Useeffect() {
    let [ users,setUsers] = useState([])
    let [date, setdate] = useState(new Date().toString())
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((data)=>data.json())
        .then((users)=>{
            console.log("useeffect");
            setUsers(users)
        })
        .catch((error)=>console.log(error))
    },[])

    useEffect(()=>{
      const timerid =  setInterval(()=>{
            setdate(new Date().toString())
        })

        return(()=>{
            clearInterval(timerid)
            // console.log(timerid+"clear")
        })
    })
  return (
    <div>
        <h1>USE EFFECT</h1>
        Date :{date}
        <UserList userlist={users} />
    </div>
  )
}

export default Useeffect