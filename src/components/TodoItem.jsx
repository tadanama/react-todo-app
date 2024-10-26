import React from "react";

function TodoItem({ todoText, onDelete, id }) {
	return (
		<li>
			<p>{todoText}</p>
			<div className="action-button">
				<button>Edit</button>
				<button onClick={(event) => {
                    onDelete(id);
                }}>Delete</button>
			</div>
		</li>
	);
}

export default TodoItem;
