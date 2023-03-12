import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { Flip, toast } from "react-toastify";
uuidv4();

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (todo.trim() === "") {
			toast.error("Todo can't be empty!", {
				position: "bottom-center",
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Flip,
			});
			return;
		}

		if (todos.some((existingTodo) => existingTodo.task === todo)) {
			toast.warning("Todo already exists!", {
				position: "bottom-center",
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Flip,
			});
			return;
		}

		setTodos([
			...todos,
			{
				id: uuidv4(),
				task: todo,
				completed: false,
				isEditing: false,
			},
		]);

		toast.success("Todo added successfully!", {
			position: "bottom-center",
			autoClose: 3500,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Flip,
		});
	};

	const toggleComplete = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTask = (task, id) => {
		if (!task) {
			return toast("Task can't be empty!", {
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
		if (todos.some((existingTodo) => existingTodo.task === task && existingTodo.id !== id)) {
			return toast("Todo already exists!", {
				type: "warning",
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

		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));

		toast("Todo updated successfully!", {
			type: "success",
			position: "bottom-center",
			autoClose: 3500,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Flip,
		});
	};

	const editTodo = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
	};

	const handleDeleteAll = () => {
		if (todos.length > 0) {
			setTodos([]);
			return toast("All Todos deleted!", {
				type: "info",
				position: "bottom-center",
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Flip,
			});
		} else {
			return toast("Todos are already empty!", {
				type: "warning",
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
	};

	return (
		<div className="todo-wrapper">
			<h1>Todo List!</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) =>
				todo.isEditing ? (
					<EditTodoForm key={index} editTodo={editTask} task={todo} />
				) : (
					<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
				)
			)}
			<button className="todo-btn-delete-all" onClick={handleDeleteAll}>
				Delete All
			</button>
		</div>
	);
};

export default TodoWrapper;
