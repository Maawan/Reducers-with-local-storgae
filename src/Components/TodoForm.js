import React, { useContext } from 'react'
import {v4} from 'uuid';
import TodoContext from '../context/TodoContext';
import { ADD_TODO } from '../context/action.types';
const TodoForm = () => {
    const { dispatch } = useContext(TodoContext)
    const [todoString , setTodoString] = React.useState();

    const handleSubmit = e => {
        if(todoString === ""){
            return alert("Oops ! Can't insert empty field");
        }
        const curTodo = {
            todoString,
            id : v4()
        }
        dispatch({
            type : ADD_TODO,
            payload: curTodo
        })
        setTodoString("");
    }
    const handleEnterPress = e => {
        if(e.key === 'Enter'){
            handleSubmit();
        }
    }
    return (
        <div className="form-container">
                <div className="main-form ">
                    <input type="text" className="form-input"
                    value = {todoString}
                    onChange={(e) => {
                       setTodoString(e.target.value);
                    }}
                    onKeyDown={handleEnterPress}
                     />
                    <button className='form-button' 
                    onClick={handleSubmit}>
                        Add
                    </button>
                </div>
            </div>
      )
}

export default TodoForm;