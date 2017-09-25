import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './index.css';
import movies from './src/containers/moviesList/mockedMovies';
import { NoFilmsFound } from './src/containers/search/noFilmsFound/noFilmsFound';
import { Footer } from './src/common/components/footer/footer';

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
                <BrowserRouter >
                    <Switch>
                        <Route exact path='/' component={ NoFilmsFound } />
                        {/* <Route path='/search/:query' component={ Search } /> */}
                        {/* <Route path='/film/:title' component={ Movie } /> */}
                    </Switch>
                </BrowserRouter>
                <Footer />
            </Wrapper>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));