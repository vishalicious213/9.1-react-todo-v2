import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        // console.log(this.props.data);
        return (
            this.props.data.map(
                item => {
                    // console.log(item.task);
                    // console.log(item.id);
                    // console.log(item.completed)
                    return (
                        <Todo 
                            task={item.task} 
                            id={item.id} 
                            completed={item.completed} 
                            key={item.id} 
                            toggleCompleted={this.props.toggleCompleted}
                        />
                    )
                }
            )
        )
        // return (
        //     <div>
        //         <div>TodoList receives array and iterates over list with Todo</div>
        //         <Todo />
        //     </div>
        // )
    }
}

export default TodoList;

/* <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */