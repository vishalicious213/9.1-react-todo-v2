import React from 'react';
import './Menu.css';

const Menu = (props) => {
    return (
        <div className='menu'>
            <button className='menuButton' name='todobutton'
                onClick={() => props.toggleMenu(props.todo)}>
                To Do List
            </button>
            
            <button className='menuButton' 
                onClick={() => props.toggleMenu(props.shop)}>
                Shopping List
            </button>

            <button className='menuButton' 
                onClick={() => props.toggleMenu(props.note)}>
                Notes
            </button>
        </div>
    )
}

export default Menu;