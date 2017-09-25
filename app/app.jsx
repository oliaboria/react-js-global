import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './index.css';
import { Footer } from './src/common/components/footer/footer';
import { Movie } from './src/containers/movie/movie';
import { NoFilmsFound } from './src/containers/noFilmsFound/noFilmsFound';
import { Search } from './src/containers/search/search';

const Wrapper = styled.div`
    min-height: 100%;
    position: relative;

    &::after {
        display: block;
        content: '';
        height: 40px;
    }
`;

export class App extends React.Component {
    render() {
        return (
            <Wrapper>
                    <Switch>
                        {/* <Route path='/' component={ NoFilmsFound } /> */}
                        <Route path='/' component={ Movie } />
                        <Route path='/search/:query' component={ Search } />
                        <Route path='/film/:title' component={ Movie } />
                    </Switch>
                <Footer />
            </Wrapper>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))