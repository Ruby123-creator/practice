import React from 'react'
// import { useContext } from 'react'
import { ContextValue } from './Context'
function User({user}) {
  
    if(!user){
        return <p>No user found</p>
    }
  return (
    <div>
       
        <ContextValue.Consumer>
          {isAdmin=>
        <p>{user.username}----{user.name}----{user.email}
        
        {
          isAdmin&& <button>Remove</button>
        }
        </p>
        }
        </ContextValue.Consumer>
       
    </div>
  )
}

export default User