import React, { Component } from 'react';
import TodoItem from './TodoItem';

interface IPost {
    id: number;
    info: {
        heading: string;
        price: number;
        description: string;
    };
}

const todoData = [
    {
        id: 1,
        info: {
            heading: 'Heading 1',
            price: 15000,
            description: 'et enim repellendus',
        },
    },
    {
        id: 2,
        info: {
            heading: 'Heading 2',
            price: 8000,
            description: 'et enim repellendus',
        },
    },
    {
        id: 3,
        info: {
            heading: 'Heading 3',
            price: 4500,
            description: 'et enim repellendus',
        },
    },
];

export default class Todo extends Component {
    render() {
        return <TodoItem heading="заголовок" />;
    }
}
