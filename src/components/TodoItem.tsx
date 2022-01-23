import React, { Component } from 'react';
import styled from 'styled-components';

interface Style {
    [key: string]: string
}

interface IProps {
    heading: string,
    price: number,
    description: string
}

const StyledTodoListItem: Style = styled.div`
    background: skyblue;
    font-family: 'Roboto Regular';
    font-style: italic;
    height: auto;
    width: 100%;
`;

export default class TodoItem extends Component {
    props: IProps = {
        heading = this.props.heading,
        price = this.props.price,
        description = this.props.description,
    };

    state = {
        important = false,
    };

    render() {
        return(
            <StyledTodoListItem>
                <b>{ heading }</b>
            </StyledTodoListItem>
        )
    }
};
