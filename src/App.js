import { useState } from 'react';
import './App.css';
import State from './Components/State';
import Cond_Ren from './Components/Cond_Ren';
import Useeffect from './Components/UseEffect/Useeffect';
import Userender from './Components/Userender';
import Useref from './Components/Useref';
import FetchApi from './Components/API/FetchApi';
import Context from './Components/UseEffect/Context';
import TodoList from './Components/ToDoList/TodoList'
import Provider from './Provider';
import Toggler from './Toggler';
import Main from './Components/HOC/Main';
import Usememo from './Components/Memorizarion/Usememo';

function App() {
  const [msg ,setmsg] = useState("")
  let user={
    name:"Ruby Pal",
    email:"rubyp20001@gmail.com"
  }
  return (
    <div className="App">
            <h1>{msg}</h1>

      <State props_val={setmsg}/>
      <hr />
      <h1>Conditonally Rendering</h1>
      <Cond_Ren Users={user}/>
      <hr />
      <Useeffect/>
      <hr />
      <h1>UseReducer</h1>
      <Userender/>
      <hr />
      <Useref/>
      <hr />
      <h1>API's</h1>
      <FetchApi/>
      <hr />
      <h1>Context API</h1>
      <Context/>
      <hr />
      <h1>TO-DO-LIST</h1>
      <TodoList/>
      <hr />
      <div>
        <Provider>
          <Toggler/>
        </Provider>
      </div>
      <hr />
      <div>
        <h1>Higher order component</h1>
        <Main/>
      </div>
      <div>
        <h1>Usememo</h1>
        <Usememo/>
      </div>
    </div>
  );
}

export default App;
