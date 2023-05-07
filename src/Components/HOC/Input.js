import Hoc from "./Hoc";

const Input = ({type,value,onChange})=>{
    return(
        <div>
            <input type={type} value={value} onChange ={onChange} />
        </div>
    )
}

const ThemedInput = Hoc(Input)
export default ThemedInput;