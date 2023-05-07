import React from 'react'


// Conditional rendering in React refers to the process of rendering different components or elements based on certain conditions. In other words, React allows you to conditionally render components based on whether a certain condition is met.
// We can use ternary operator and && operator

function Cond_Ren({Users}) {
  return (
    <div>
       {
        Users?<div>{Users.name} && {Users.email}</div>:<button>Register for free</button>
       }
    </div>
  )
}

export default Cond_Ren