import React from 'react';
import '@Styles/TodoItem.scss';

const todoData = [
    {
        key: 1,
        heading: 'Heading 1',
        price: 15000,
        description: 'et enim repellendus',
    },
    {
        key: 2,
        heading: 'Heading 2',
        price: 8000,
        description: 'et enim repellendus',
    },
    {
        key: 3,
        heading: 'Heading 3',
        price: 4500,
        description: 'et enim repellendus',
    },
];

const Todo = ({todoData}) => {
    const TodoItem = todoData.forEach(elem => {
        return (
            <div className="container" id="todo-list-item">
                <b className="todo-list-item__heading">{elem.heading}</b>
                <p className="todo-list-item__price">{elem.price}</p>
                <p className="todo-list-item__description">{elem.description}</p>
            </div>
        );
    });

    return { TodoItem };
};

export default Todo;
