import React from 'react';
import '@Styles/TodoItem.scss';

const TodoItem = () => {
    return (
        <div className="container" id="todo-list-item">
            <b className="todo-list-item__heading">Test text of Heading</b>
            <p className="todo-list-item__price">Test text of Price</p>
            <p className="todo-list-item__description">Test text of Description</p>
        </div>
    );
};

export default TodoItem;
