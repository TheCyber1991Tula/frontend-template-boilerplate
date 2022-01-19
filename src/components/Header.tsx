import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/fonts/fonts.scss';

export default class Header extends Component {
    render() {
        return (
            <StyledHeader className="container">
                <StyledH1>ToDo Application</StyledH1>
            </StyledHeader>
        );
    };
};

const StyledH1 = styled.h1`
    font-family: 'Vogue Bold';
    font-size: 50px;
    text-align: center;
`;

const StyledHeader = styled.div`
    align-items: center;
    background: #C4C5D0;
    border-radius: 5px;
    border: solid 1px black;
    display: flex;
    flex-direction: row;
    font-family: 'Vogue Bold';
    font-style: italic;
    height: 100px;
    justify-content: center;
    width: 100%;
`;
