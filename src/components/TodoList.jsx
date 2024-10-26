import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo, index) => {
				return <TodoItem key={index} id={index} todoText={todo} />;
			})}
		</ul>
	);
}

export default TodoList;
