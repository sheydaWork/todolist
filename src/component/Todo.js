import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ text, todo, todos, setTodos }) => {
    const [isComplete, setIsComplete] = useState(false)
    const deletHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const CompleteHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                setIsComplete(!isComplete)
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    console.log(todos)

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={CompleteHandler} className="trash-btn">
                <FontAwesomeIcon icon={isComplete ? ['fas', 'xmark'] : ['fas', "check"]} />
            </button>
            <button onClick={deletHandler} className="trash-btn">
                <FontAwesomeIcon icon={['fas', 'trash']} />
            </button>
        </div>
    );
};
export default Todo