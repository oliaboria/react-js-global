import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../common/components/contentContainer/contentContainer';
import { MoviesList } from '../../common/components/moviesList/moviesList';
import { MovieHeader } from './movieHeader/movieHeader';
import movies from '../search/mockedMovies';

export class Movie extends React.Component {
    constructor(){
        super();

        this.state = {
            movies: movies
        }
    }

    render() {
        return (
            <div>
                <MovieHeader movie={ this.state.movies[0] }/>
                <ContentContainer>
                    <MoviesList movies={ this.state.movies } />
                </ContentContainer>
            </div>
        );
    } 
}