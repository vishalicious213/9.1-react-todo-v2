import React from 'react';
import './Menu.css';

const Menu = (props) => {
    return (
        <div className='menu'>
            <button className='menuButton' onClick={() => props.toggleMenu()}>
                To Do List
            </button>
            
            <button className='menuButton' onClick={() => props.toggleMenu()}>
                Shopping List
            </button>

            <button className='menuButton' onClick={() => props.toggleMenu()}>
                Notes
            </button>
        </div>
    )
}

export default Menu;