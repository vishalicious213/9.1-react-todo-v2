import React from 'react';
import todoData, { shoppingData, notesData } from './components/data';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Menu from './components/Menu';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataset: todoData, // holds to-do list, shopping list or notes
      };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTask = (event, item) => {
    // console.log(this.state.todoData);
    event.preventDefault();

    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState(
      {dataset: [...this.state.dataset, newTask]},
    )
  }

  toggleCompleted = (itemId, name, completed) => {
    // console.log('toggle: ', name, itemId, completed) // confirm item name & id

    this.setState({  // get tasks from state and map though them
      dataset: this.state.dataset.map(task => {
        if (itemId === task.id) { // if sent id = id in state
          return {
            ...task, // get individual matching task
            completed: !task.completed // toggle its completed status in state
          }
        }
        return task; // else (if id doesn't match) return item
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();

    this.setState({ // take current state, remove tasks that are not complete and setState with them
      dataset: this.state.dataset.filter(task => !task.completed)
    })
  }

  toggleMenu = (choice) => {
    // console.log('Menu Toggled', choice);
    if (choice === 'todoData') {this.setState({dataset: todoData})};
    if (choice === 'shoppingData') {this.setState({dataset: shoppingData})};
    if (choice === 'notesData') {this.setState({dataset: notesData})};
  }

  render() {
    // console.log(this.state)
    return (
      <div className='app'>
        <h2>Welcome to your To-do App!</h2>
        <Menu toggleMenu={this.toggleMenu} todo='todoData' shop='shoppingData' note='notesData' />
        <div className='checklist'>
        <p className='buffer'></p>
          <TodoList data={this.state.dataset} toggleCompleted={this.toggleCompleted}/>
          <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;


/* <App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />. */