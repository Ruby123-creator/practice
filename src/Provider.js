
import React ,{useState} from 'react'
import { Appcontext } from './context'

function Provider(props) {
    let [color,setColor] = useState({
        colorWhite: {color:"white",backgroundColor:"black", fontSize:"20px", border: "2px solid black"},
        colorRed: {color:"red",backgroundColor:"white", fontSize:"20px", border: "2px solid black"},
    });
    
    return(
        <Appcontext.Provider value={
            {
              defaultWhite: color,
              defaultRed: ()=>setColor({...color, color:"red", backgroundColor: "white"}),
              changeColor: ()=>setColor({...color, color:"Tomato"}),

            }
            }>
            {props.children}
        </Appcontext.Provider>
    )
}

export default Provider