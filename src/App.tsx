import * as React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';
import Post from './components/Post';

export default class App extends React.Component {
    render() {
        return (
            <StyledApp>
                <Header />
                <Post />
                <Todo />
                <Footer />
            </StyledApp>
        );
    }
}

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
`;
