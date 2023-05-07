import React, { useReducer , useState} from 'react'

const initialstate =0; 
const initialvalues =
    [{id:Date.now() , name:"Ruby pal", email:"rubyp20001@gmail.com"}
    ]
    function reducer(state,action){
    switch(action.type){
        case "add":
            return [...state , action.payload];
        case "delete":
            return state.filter((contact)=>{
                return contact.id !== action.payload.id;
            });
            default:
                throw new Error()
    }
}


// The useReducer hook is used for complex state manipulations and state transitions. … useReducer is a React hook function that accepts a reducer function, and an initial state
function reducer1(state,action){
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
            default:
                throw new Error()
    }
}

function Usereducer() {
    const[state1 , dispatch1] = useReducer(reducer1,initialstate)
    const [state,dispatch] = useReducer(reducer , initialvalues);
    const [name , setname] = useState("")
    const [email ,setemail] = useState("")

    const addContact=(e)=>{
        e.preventDefault();
        const contact={
            id:Date.now(),
            name:name,
            email:email
        }
        setname("");
        setemail("");
        dispatch({type:"add" , payload:contact})
    }
  return (
    <div>
        <span>{state1}</span>
        <br />
        <button onClick={()=>{dispatch1({type:"increment"})}}>Increment</button>
        <button onClick={()=>dispatch1({type:"decrement"})}>decrement</button>
       <br />
       <form action="" onSubmit={addContact}>

       <input type="text" name="" id="" value={name} onChange={(e)=>setname(e.target.value)}/><br />
       <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} /><br />
       <button >Add contact</button>

       </form>
       <div>
        <ul>
            {
                state.map((contact)=>{
                    // console.log(contact);
                  return(
                  <li key={contact.id}>
                        <h3>{contact.name}</h3>
                        <h3>{contact.email}</h3>
                        <button onClick={()=>dispatch({type:"delete" ,payload:{id:contact.id}})}>delete</button>
                    </li>
                  )
                })
            }
        </ul>
       </div>
    </div>
  )
}

export default Usereducer;