import React, { Component } from 'react';
import styled from 'styled-components';
import 'src/assets/fonts/fonts.scss';

export default class Footer extends Component {
    render() {
        return (
            <StyledFooter className="container">
                <h4>Created by CYBER</h4>
            </StyledFooter>
        );
    }
}

const StyledFooter = styled.div`
    border: solid 1px black;
    border-radius: 5px;
    background: green;
    font-family: 'Roboto Regular';
`;
