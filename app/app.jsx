import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './index.css';
import { MoviesList } from './src/containers/moviesList/moviesList';
import { Header } from './src/common/components/header/header';
import { Footer } from './src/common/components/footer/footer';

const Wrapper = styled.div`
    min-height: 100%;
    position: relative;
`;

const ContentWrapper = styled.div`
    display: flex;
`;

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <Header /> 
                <ContentWrapper> 
                    <MoviesList />
                </ContentWrapper>
                <Footer />
            </Wrapper>     
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));