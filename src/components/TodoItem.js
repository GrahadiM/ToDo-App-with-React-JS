import React from "react";

const TodoItem = ({ todo, index, toggleTodo, updateTodo, deleteTodo }) => {
    return (
        <div className="todo-item">
            <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                {todo.text}
            </div>
            <div className="todo-group-btn">
                <button
                    type="button"
                    className="todo-btn primary"
                    onClick={() => toggleTodo(index)}
                >
                    Clear
                </button>
                <button
                    type="button"
                    className="todo-btn update"
                    onClick={() => updateTodo(index)}
                >
                    Update
                </button>
                <button
                    type="button"
                    className="todo-btn danger"
                    onClick={() => deleteTodo(index)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
