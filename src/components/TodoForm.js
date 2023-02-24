import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value !== "") {
			addTodo(value);
		} else {
			alert("Todo cannot be empty");
		}
		setValue("");
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" className="todo-input" value={value} placeholder="Enter your Todo" onChange={(e) => setValue(e.target.value)} />
			<button type="submit" className="todo-btn-submit">
				+
			</button>
		</form>
	);
};

export default TodoForm;
