import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: '',
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
        // console.log(this.state.newTask);
    }

    submitTask = event => {
        event.preventDefault(); // stop refresh

        this.props.addTask(event, this.state.newTask);
            // gets addTask from App and appends newTask to state in App
        this.setState({ newTask: '' });
            // clears input so new task can be entered
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitTask}>
                    <input type='text' name='newTask' 
                        value={this.state.newTask} 
                        onChange={this.handleChange}/>
                    <button type='submit'>Add Task</button>
                </form>

                <button onClick={this.props.clearCompleted}>
                    Clear Completed
                </button>
            </div>
        )
    }
}

export default TodoForm;

/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo. */