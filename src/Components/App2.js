import React, { useContext, useEffect } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Todos from './Todos';
import TodoForm from './TodoForm';
import TodoContext from '../context/TodoContext';
import { ADD_TODOs_FROM_LOCAL_STORAGE } from '../context/action.types';


const App2 = () => {
    
    const {todos , dispatch} = useContext(TodoContext);
    
    console.log({todos});

    useEffect(()=>{
        const localTodos = localStorage.getItem("toop");
        console.log({localTodos})
        if(localTodos !== undefined && localTodos !== null){
            dispatch({
                type:ADD_TODOs_FROM_LOCAL_STORAGE,
                payload:JSON.parse(localTodos)
            })
            
        }

    },[]);

    useEffect(() => {
        if(todos === undefined || todos === null){
        }else{
            localStorage.setItem("toop" , JSON.stringify(todos));
        }
    } , [todos]);

  return (
    <Container fluid>
          <h1>Todo App with Context API</h1>
          <Todos />
        <TodoForm />
    </Container>
  )
}

export default App2