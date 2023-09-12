import React from "react";
import Todo from "./Todo";
const ToDoList = ({ todos, filteredTodos, setTodos }) => {

    const todosHandler = (inp) => setTodos(inp)
    return (
        <div className="todo-container">
            <ul className="todo-list">

                {
                    filteredTodos.map((todo) => (
                        <Todo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={(inp) => todosHandler(inp)} />
                    ))
                }
            </ul>

        </div>
    )

}
export default ToDoList  