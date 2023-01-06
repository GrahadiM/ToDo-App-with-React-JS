import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form className="todoAdd" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-add"
                placeholder="Add list todo..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    );
};

export default TodoForm;
