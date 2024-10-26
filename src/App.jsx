import TodoForm from "./components/TodoForm";
import "./index.css";

function App() {
	return (
		<>
			<div className="wrapper">
				<h1>What should we do today?</h1>

                <TodoForm />

				<ul>
					<li>
						<p>Todo 1</p>
						<div className="action-button">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
					<li>
						<p>Todo 2</p>
						<div className="action-button">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
                    <li>
						<p>Todo 3</p>
						<div className="action-button">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
                    <li>
						<p>Todo 4</p>
						<div className="action-button">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
