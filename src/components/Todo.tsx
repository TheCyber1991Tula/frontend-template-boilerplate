import React from 'react';
// import styled from 'styled-components';
// import * as postData from 'src/scripts/data.json';
import TodoItem from './TodoItem';
import 'src/assets/fonts/fonts.scss';

interface IPost {
    id: number
    heading: string
    price: number
    description: string
    canBuy(): boolean
}

interface Style {
    [key: string]: string
}

/*
const STodoItem: Style = styled.div`
    width: 100%;
    height: auto;
    background: skyblue;
    font-family: 'Roboto Regular';
    font-style: italic;
`;
*/

const Todo = () => <TodoItem id={} heading={} price={} description={}/>;

export default Todo;
