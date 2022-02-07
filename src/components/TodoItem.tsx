import React from 'react';
import '@Styles/TodoItem.scss';

const TodoItem = ({ heading, price, description }) => {
    return (
        <div className="container" id="todo-list-item">
            <b className="todo-list-item__heading">{heading}</b>
            <p className="todo-list-item__price">{price}</p>
            <p className="todo-list-item__description">{description}</p>
        </div>
    );
};

export default TodoItem;
