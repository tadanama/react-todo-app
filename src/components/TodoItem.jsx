import React from "react";

function TodoItem({ todoText }) {
	return (
		<li>
			<p>{todoText}</p>
			<div className="action-button">
				<button>Edit</button>
				<button>Delete</button>
			</div>
		</li>
	);
}

export default TodoItem;
