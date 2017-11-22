import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { NoFilmsFound } from './src/components/noFilmsFound/noFilmsFound';
import Movie from './src/containers/movie';
import Search from './src/containers/search';

export const Wrapper = styled.div`
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
            <Switch>
                <Route path='/' exact component={ NoFilmsFound } />
                <Route path='/search/:query' component={ Search } />
                <Route path='/film/:id' component={ Movie } />
                <Route path='*' component={ NoFilmsFound } />
            </Switch>
        );
    }
}