import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Form = ({ setInputText, inputText, todos, setTodos, setStatus, setErrorText }) => {
    const inputTexthandler = (e) => {
        setInputText(e.target.value);
    };


    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText) {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Date.now() }

            ])
            setInputText("");
            setErrorText("");
        } else {
            setErrorText("Please Enter a task")
        }
    }


    const StatusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTexthandler} type='text' className="todo-input" />
            <button onClick={(e) => submitTodoHandler(e)} className='todo-button' type='submit'>
                <FontAwesomeIcon icon={['fas', 'plus-circle']} />
            </button>
            <div className='select'>
                <select onChange={StatusHandler} name='todos' className='filter-todo'>
                    <option value="all"> All</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted"> uncompleted</option>
                </select>
            </div>
        </form>
    )


}
export default Form;