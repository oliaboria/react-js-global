import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import history from './src/utils/history';

import './index.css';
import { configureStore } from './src/store/configureStore';
import { Footer } from './src/common/components/footer/footer';
import { NoFilmsFound } from './src/components/noFilmsFound/noFilmsFound';
import Movie from './src/containers/movie';
import Search from './src/containers/search';

const store = configureStore();

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
            <Provider store={ store }>
                <Wrapper>
                        <Router history={ history }>
                            <Switch>
                                <Route path='/' exact component={ NoFilmsFound } />
                                <Route path='/search/:query' component={ Search } />
                                <Route path='/film/:id' component={ Movie } />
                                <Route path='*' component={ NoFilmsFound } />
                            </Switch>
                        </Router>
                    <Footer />
                </Wrapper>
            </Provider>
        );
    }
}

ReactDOM.render((<App />), document.getElementById('root'))