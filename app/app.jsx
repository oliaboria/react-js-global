import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import history from './src/utils/history';

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
                    <Router history={ history }>
                        <Switch>
                            <Route path='/' exact component={ NoFilmsFound } />
                            <Route path='/search/:query' component={ Search } />
                            <Route path='/film/:title' component={ Movie } />
                            <Route path='*' component={ NoFilmsFound } />
                        </Switch>
                    </Router>
                <Footer />
            </Wrapper>
        );
    }
}

ReactDOM.render((<App />), document.getElementById('root'))