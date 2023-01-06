import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, searchTodo, filterTodo, toggleTodo, updateTodo, deleteTodo }) => {
    return (
        <div className="todo-list">
            {todos.filter((todo)=> {
                if (filterTodo = "") {
                    return todo
                } else if (todo.text.toLowerCase().includes(searchTodo.toLowerCase())) {
                    return todo
                }
            }).map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    filterTodo={filterTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
