import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/form';
import ToDoList from './component/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    filterHandler();

  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  console.log(filteredTodos)

  const todosHandler = (inp) => setTodos(inp);
  const setInputHandler = (inp) => setInputText(inp)

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={(input) => todosHandler(input)}
        inputText={inputText}
        setInputText={(text) => setInputHandler(text)}
        setStatus={setStatus}
        setErrorText={setErrorText}
      />
      <p className='error'>{errorText}</p>
      <ToDoList todos={todos}
        setTodos={(input) => todosHandler(input)}
        filteredTodos={filteredTodos}

      />
    </div>
  );
}

export default App;
