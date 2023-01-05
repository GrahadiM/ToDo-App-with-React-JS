import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
