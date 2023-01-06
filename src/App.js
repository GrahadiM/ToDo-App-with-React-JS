import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import swal from 'sweetalert';
import {getTodoFromLocalStorage, saveTodoToLocalStorage} from "./data/localstorage";

const App = () => {
    const [todos, setTodos] = useState(getTodoFromLocalStorage("todos") || []);
    const [searchTodo, setSearchTodo] = React.useState("");

    const addTodo = (value) => {
        const newTodos = [...todos, { text: value }];
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
        swal("Created Todo Success!", "Todo is " + value, "success");
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
        swal("Todo Completed!", "Todo is " + newTodos[index].text, "success");
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
        swal("Updated Todo Success!", item.text, "success");
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        saveTodoToLocalStorage("todos", newTodos);
        swal("Deleted Todo Success!", "", "success");
    };

    return (
        <div className="app">
            <div className="todo-tool">
                <TodoForm addTodo={addTodo} />
                <div className="todoFilter">
                    <input
                        type="text"
                        className="todo-filter"
                        placeholder="Search todo..."
                        value={searchTodo}
                        onChange={(e) => setSearchTodo(e.target.value)}
                    />
                </div>
            </div>
            <TodoList todos={todos} searchTodo={searchTodo} filterTodo={setSearchTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
