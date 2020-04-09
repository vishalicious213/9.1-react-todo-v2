import React from 'react';

const Todo = (props) => {
    return (
        <div>
            {/* <div>Todo displays each task onscreen</div> */}
            <div onClick={() => props.toggleCompleted(props.id)}>{props.task}</div>
            {/* <div>{props.id}</div> */}
            {/* <div>{props.completed}</div> */}
        </div>
    )
}

export default Todo;

/* <Todo /> is a component that takes in the todo data and displays the task to the screen. */