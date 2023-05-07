import Hoc from "./Hoc";
const Button =({children})=>{
    return (
        <button>{children}</button>
    )
}

const ThemedBtn = Hoc(Button)

export default ThemedBtn;