import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../common/components/contentContainer/contentContainer';
import { MoviesList } from '../../common/components/moviesList/moviesList';
import movies from './mockedMovies';
import { SearchHeader } from './searchHeader/searchHeader';

export class Search extends React.Component {
    constructor(){
        super();

        this.state = {
            movies: movies
        }
    }

    render() {
        return (
            <div>
                <SearchHeader moviesNumber={ this.state.movies.length } />
                <ContentContainer>
                    <MoviesList movies={ this.state.movies } />
                </ContentContainer>
            </div>
        );
    } 
}