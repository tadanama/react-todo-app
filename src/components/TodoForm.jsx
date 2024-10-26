import React, { useState } from "react";

function TodoForm({ onAdd }) {
	const [inputText, setInputText] = useState("");

	function handleChange(event) {
		const { value } = event.target;

		setInputText(value);
	}

	return (
		<form onSubmit={(event) => {
            event.preventDefault();
            onAdd(inputText);
            setInputText("");
        }}>
			<input
				type="text"
				name="todoText"
				value={inputText}
				onChange={handleChange}
                autoComplete="off"
			/>
			<button type="submit">Add</button>
		</form>
	);
}

export default TodoForm;
