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
	return (
		<>
			<div className="wrapper">
				<h1>What should we do today?</h1>

				<TodoForm onAdd={addTodo} />
                <TodoList todos={todo} />
				
			</div>
		</>
	);
}

export default App;
