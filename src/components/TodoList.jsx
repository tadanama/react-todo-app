import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
	return (
		<ul>
			{todos.map((todo, index) => {
				return <TodoItem key={index} id={index} todoText={todo} onDelete={onDelete} />;
			})}
		</ul>
	);
}

export default TodoList;
