import React, { Component } from 'react';
import styled from 'styled-components';
import 'src/assets/fonts/fonts.scss';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <StyledItemStatusFilter>
                <StyledButton type="button">Important</StyledButton>
                <StyledButton type="button">Complete</StyledButton>
                <StyledButton type="button">Remove</StyledButton>
            </StyledItemStatusFilter>
        );
    }
};

const StyledItemStatusFilter = styled.div`
    width: 300px;
    height: auto;
    background: skyblue;
    border: 1px solid black;
    border-radius: 5px;
    font-family: 'Vogue Bold';
`;

const StyledButton = styled.button`
    text-align: center;
    text-transform: uppercase;
    width: auto;
    height: auto;
    background: orange;
    border: 1px solid black;
    border-radius: 5px;
    font-family: 'Roboto Regular';
`;
