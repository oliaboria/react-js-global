import React from 'react';
import ReactDOM from 'react-dom';

import { MoviesList } from './src/containers/moviesList/moviesList';

class App extends React.Component {
    render() {
        return (
            <MoviesList />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));