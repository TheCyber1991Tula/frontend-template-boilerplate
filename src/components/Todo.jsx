import React, { Component } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

import '~/assets/styles/todo.scss';

export default class Todo extends Component {
    render() {
        return(
            <TodoItem />
        );
    }
}
