import React, { useState } from "react";
import { Flip, toast } from "react-toastify";

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value !== "") {
			addTodo(value);
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
			<input type="text" className="todo-input" value={value} placeholder="Enter your Todo" onChange={(e) => setValue(e.target.value)} />
			<button type="submit" className="todo-btn-submit">
				+
			</button>
		</form>
	);
};

export default TodoForm;
