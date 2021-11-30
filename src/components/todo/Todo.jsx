import React, { Component } from 'react';
import TodoItem from '../todo/TodoItem';
import styled from 'styled-components';
import './todo.scss';
import data from '../../scripts/data';

export default class Todo extends Component {
    render() {
        return(
            <TodoItem />
        );
    }
}
