import React , {useState,createContext} from 'react'
import Useeffect from './Useeffect'
import Login from './Login'

export const ContextValue = createContext();

function Context() {
    const [isLogin , setLogin] = useState(false)
    const [isAdmin , setAdmin] = useState(false)
    function UpdateLogin (value){
        setLogin(value);
        setAdmin(true);
    }
  return (
    <div>
        <ContextValue.Provider isAdmin={isAdmin}>
        {
            isLogin?<Useeffect />:<Login login={UpdateLogin}/>
        }
        </ContextValue.Provider>
    </div>
  )
}

export default Context