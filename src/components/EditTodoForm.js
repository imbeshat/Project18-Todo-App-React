import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value !== "") {
			editTodo(value, task.id);
		} else {
			alert("Todo cannot be empty");
		}
		setValue("");
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" className="todo-input" value={value} placeholder="Update your Todo" onChange={(e) => setValue(e.target.value)} />
			<button type="submit" className="todo-btn-update">
				Update Todo
			</button>
		</form>
	);
};

export default EditTodoForm;
