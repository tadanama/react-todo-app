import React, { useState } from "react";

function TodoForm() {
	const [inputText, setInputText] = useState("");

	function handleChange(event) {
		const { value } = event.target;

		setInputText(value);
	}

	return (
		<form>
			<input
				type="text"
				name="todoText"
				value={inputText}
				onChange={handleChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
}

export default TodoForm;
