import React, { useContext } from 'react'
import { REMOVE_TODO } from '../context/action.types';
import TodoContext from '../context/TodoContext';

const Todos = () => {
    const {todos , dispatch} = useContext(TodoContext);
    function deleteCurrent(idp){
        dispatch({
            type: REMOVE_TODO,
            payload : idp
        })
    }
  return (
    <div className="con1">
        {
            todos.map(todo => (
                <div className="todo" key={todo.id}>
                    {todo.todoString} <span className='float-right'
                    onClick={() => {
                        deleteCurrent(todo.id);
                    }}
                    
                    ><img src="trash.png" className="float-right" style={{width:"15px"}}alt="" /></span>
                </div>

            ))
        }
    </div>
  )
}

export default Todos