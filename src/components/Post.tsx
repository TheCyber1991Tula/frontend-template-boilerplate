import React, { Component } from 'react';
import styled from 'styled-components';

export default class Post extends Component {
    render() {
        return (
            <StyledPost id="post">
                <h3>heading</h3>
                <b>price</b>
                <p>description</p>
            </StyledPost>
        );
    }
}

const StyledPost = styled.div`
    width: 300px;
    height: auto;
    background: orange;
    border: 1px solid black;
    border-radius: 5px;
`;
