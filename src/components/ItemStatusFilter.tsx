import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/fonts/fonts.scss';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <StyledItemStatusFilter>
                <StyledButton type="button" className="btn btn-warning">Active</StyledButton>
                <StyledButton type="button" className="btn btn-success">Complete</StyledButton>
                <StyledButton type="button" className="btn btn-primary">All</StyledButton>
            </StyledItemStatusFilter>
        );
    }
};

const StyledItemStatusFilter = styled.div`
    background: #C4C5D0;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: row;
    font-family: 'Vogue Bold';
    height: 75px;
    align-items: center;
    justify-content: center;
    width: 400px;
`;

const StyledButton = styled.button`
    border-radius: 5px;
    border: 1px solid black;
    flex-direction: row;
    font-family: 'Roboto Regular';
    font-style: italic;
    height: 50%;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    width: auto;
`;
