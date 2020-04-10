import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <button className='menuButton'>To Do List</button>
            <button className='menuButton'>Shopping List</button>
            <button className='menuButton'>Notes</button>
        </div>
    )
}

export default Menu;