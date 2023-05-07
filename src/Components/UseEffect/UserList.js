import React, { useEffect, useState } from 'react'
import User from './User'

function UserList({userlist}) {
    const [user , setuser] = useState(null)
    const [id , setid] = useState(0)

    useEffect(()=>{
        if(id>0){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log("useeffect"+id);
            setuser(data)
        })
    }
    },[id])
  return (
    <div>
        <User user={user} />
        {
            userlist.map((item,index)=>{
                return(
                    <div onClick={()=>{
                        setid(item.id)}} style={{backgroundColor:"grey" ,height:"30px", color:"black"}} key={item.id}>
                         <h4>{item.username}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserList