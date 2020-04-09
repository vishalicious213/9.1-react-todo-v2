import React from 'react';
import todoData from './components/data';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {todoData};
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTask = (event, item) => {
    console.log(this.state.todoData);
    event.preventDefault();

    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState(
      {todoData: [...this.state.todoData, newTask]},
    )
  }

  toggleCompleted = (itemId) => {
    console.log('toggle: ', itemId)
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.todoData} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;


/* <App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />. */