import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {
    getTodoFromLocalStorage,
    saveTodoToLocalStorage,
} from "./data/localstorage";

const App = () => {
    // get initial data from localstorage
    const [todos, setTodos] = useState(getTodoFromLocalStorage("todos") || []);

    const addTodo = (value) => {
        const newTodos = [...todos, { text: value }];
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
    };

    const updateTodo = (index) => {
        const newTodos = [...todos];
        const item = newTodos[index];
        let newItem = prompt(`Update ${item.text}?`, item.text);
        let todoObj = { text: newItem, complete: false };
        newTodos.splice(index, 1, todoObj);
        if (newItem === null || newItem === "") {
            return;
        } else {
            item.text = newItem;
        }
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
    };

    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
