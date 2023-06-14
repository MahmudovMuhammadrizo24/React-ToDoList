import React from 'react';

class App extends React.Component {
	state = {
		todos: [],
		newTodo: ''
	};

	handleInputChange = (event) => {
		this.setState({ newTodo: event.target.value });
	};

	handleAddTodo = () => {
		const { newTodo, todos } = this.state;
		if (newTodo.trim() !== '') {
			this.setState((prevState) => ({
				todos: [...prevState.todos, newTodo],
				newTodo: ''
			}));
		}
	};

	handleDeleteTodo = (index) => {
		this.setState((prevState) => {
			const updatedTodos = [...prevState.todos];
			updatedTodos.splice(index, 1);
			return { todos: updatedTodos };
		});
	};

	render() {
		const { todos, newTodo } = this.state;

		return (
			<div>
				<h1>Todo List</h1>
				<div>
					<input
						type="text"
						value={newTodo}
						onChange={this.handleInputChange}
						placeholder="Enter a new todo"
					/>
					<button onClick={this.handleAddTodo}>Add Todo</button>
				</div>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}



export default App;
