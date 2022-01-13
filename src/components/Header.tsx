import React, { Component } from 'react';
import styled from 'styled-components';
import 'src/assets/fonts/fonts.scss';

export default class Header extends Component {
    render() {
        return (
            <StyledHeader className="container">
                <button type="button" className="btn btn-warning">some text</button>
                <h1>lorem ipsum dolor sit amet</h1>
            </StyledHeader>
        );
    };
};

const StyledHeader = styled.div`
    height: 200px;
    background: yellow;
    border-radius: 5px;
    border: solid 1px black;
    font-family: 'Vogue Bold';
    font-style: italic;
`;
