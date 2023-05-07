import React, { useReducer, useState } from 'react'
import { ACTIONS } from './Constants';
function reducer(state,action){
    switch(action.type){
        case ACTIONS.ADD_ACTION:
            const arr =[...state ,setTodo(action.payload.task)]
            console.log(arr)
            return arr;
        case ACTIONS.DELETE_ACTION:
            return state.filter((todo)=>todo.id!==action.payload)
        case ACTIONS.TOGGLE_ACTION:
            return state.map((todo)=>{
                // console.log(todo.done)
                if(todo.id===action.payload){
                    // console.log(todo.done)
                    // console.log({...todo ,done:!todo.done});
                    return {...todo ,done:!todo.done}
                }
            })
        default:
            throw new Error();
    }
}

const setTodo =(task)=>{
     return{
        task,
        id:Date.now(),
        done:false,
     }
       

}

function TodoList() {
    const [task ,setTask] = useState("");
    const [state, dispatch] = useReducer(reducer , [])
    function AddTask(){
      dispatch({
        type:ACTIONS.ADD_ACTION,
        payload:{
            task:task,
            
        }
      })
      setTask("")
    }

    // console.log(state)
  return (
    <div>
        <div>
            <input type="text" name="" value={task} placeholder='Enter your task' onChange={(e)=>setTask(e.target.value)} id="" />
            <button onClick={AddTask} >ADD TASK</button>
        </div>
        <div>
            <ul>
                {
                    state.map((todo,index)=>{
                           return(<div key={index} className='todolist'>
                            <button  onClick={()=>{dispatch({type:ACTIONS.TOGGLE_ACTION,payload:todo.id})}} ></button>
                            <span style={{ textDecorationLine: todo && todo.done ? "line-through" : "none" }} >{todo && todo.task}</span>
                            <button onClick={()=>{
                                // console.log(todo.id)
                                dispatch({type:ACTIONS.DELETE_ACTION,payload:todo.id})}}>Remove</button>
                            </div>)
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default TodoList