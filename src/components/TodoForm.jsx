import React from "react";

function TodoForm() {
	return (
		<form>
			<input type="text" name="todoText" />
			<button type="submit">Add</button>
		</form>
	);
}

export default TodoForm;
