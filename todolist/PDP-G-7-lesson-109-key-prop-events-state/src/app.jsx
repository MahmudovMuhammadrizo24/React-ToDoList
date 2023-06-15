import React from 'react';
import './main.scss';

class App extends React.Component {
	state = {
		todos: [],
		newTodo: '',
		isTextDecorated: false
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

	handleButtonClick = () => {
		this.setState((prevState) => ({
			isTextDecorated: !prevState.isTextDecorated
		}));
	};

	render() {
		const { todos, newTodo, isTextDecorated } = this.state;
		const textClassName = isTextDecorated ? 'decorated-text' : 'undecorated-text';

		return (
			<div className='container'>
				<h1>Todo List</h1>
				<div className='todolist'>
					<div className='inputBox'>
						<input
							type="text"
							value={newTodo}
							onChange={this.handleInputChange}
							placeholder="Enter a new todo"
						/>
						<button className='add' onClick={this.handleAddTodo}>Add</button>
					</div>

					{todos.map((todo, index) => (
						<div className={textClassName} key={index}>
							{todo}
							<button className='click' onClick={this.handleButtonClick}>✅</button>
							<button className='click1' onClick={() => this.handleDeleteTodo(index)}>❌</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
