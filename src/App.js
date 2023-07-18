import React , {useEffect, useReducer} from 'react'
import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoContext from './context/TodoContext';
import todoReducer from './context/reducer';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';
import { ADD_TODOs_FROM_LOCAL_STORAGE } from './context/action.types';
import App2 from './Components/App2';


const App = () => {
  const [todos , dispatch] = useReducer(todoReducer , []);
  
  return (
    <TodoContext.Provider value={{todos , dispatch}}>
        <App2 />
    </TodoContext.Provider>
  )
}

export default App;