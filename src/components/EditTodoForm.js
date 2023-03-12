import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(value, task.id);
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" className="todo-input" value={value} placeholder="Update your Todo" onChange={(e) => setValue(e.target.value)} />
			<button type="submit" className="todo-btn-update">
				Update
			</button>
		</form>
	);
};

export default EditTodoForm;
