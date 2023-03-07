import React, { useState } from "react";
import { Flip, toast } from "react-toastify";

const EditTodoForm = ({ editTodo, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value !== "") {
			editTodo(value, task.id);
		} else {
			return toast("Todo can't be empty!", {
				type: "error",
				position: "bottom-center",
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Flip,
			});
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
