import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
	const [todo, setTodo] = useState([]);

	function addTodo(newTodo) {
		setTodo((previousTodo) => {
			return [...previousTodo, newTodo];
		});
	}

	function deleteTodo(id) {
		setTodo((previousTodo) => {
			return previousTodo.filter((todo, index) => index !== id);
		});
	}
	return (
		<>
			<div className="wrapper">
				<h1>What should we do today?</h1>

				<TodoForm onAdd={addTodo} />
				<TodoList todos={todo} onDelete={deleteTodo} />
			</div>
		</>
	);
}

export default App;
