import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <StyledFooter className="container">
                <StyledH4>Created by CYBER</StyledH4>
                <StyledH5>copyright 2022</StyledH5>
            </StyledFooter>
        );
    }
}

const StyledFooter = styled.div`
    align-items: center;
    background: #C4C5D0;
    border-radius: 5px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledH4 = styled.h4`
    font-family: 'Vogue Bold';
    font-size: 25px;
    text-align: center;
`;

const StyledH5 = styled.h5`
    font-family: 'Vogue Bold';
    font-size: 20px;
    text-align: center;
`;
