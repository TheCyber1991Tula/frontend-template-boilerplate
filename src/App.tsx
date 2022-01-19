import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';
import ItemStatusFilter from './components/ItemStatusFilter';

interface Style {
    [key: string]: string
}

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    return (
        <StyledApp>
            <Header />
            <ItemStatusFilter />
            <Footer />
        </StyledApp>
    );
};

export default App;
