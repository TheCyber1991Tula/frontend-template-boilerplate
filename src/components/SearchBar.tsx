import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchBar extends Component {
    render() {
        return (
            <SSearchBarWrap>
                <SInput type="text" />
                <button className="btn btn-primary" type="button">Clear</button>
            </SSearchBarWrap>
        );
    }
};

const SSearchBarWrap = styled.div`
    background: silver;
    border-radius: 3px;
    border: black 1px solid;
    display: flex;
    flex-direction: row;
    height: 100px;
    width: 300px;
`;

const SInput = styled.input`
    width: 150px;
    height: 30px;
`;
