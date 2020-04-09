import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div>
            {/* <div>Todo displays each task onscreen</div> */}
            <div 
                onClick={() => props.toggleCompleted(props.id, 
                props.task, props.completed)}
                className={props.completed === false ? "notComplete" : "complete"}
            >
                {props.task}
            </div>
            {/* <div>{props.id}</div> */}
            {/* <div>{props.completed}</div> */}
        </div>
    )
}

export default Todo;

/* <Todo /> is a component that takes in the todo data and displays the task to the screen. */