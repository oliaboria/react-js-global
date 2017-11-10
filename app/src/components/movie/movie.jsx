import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../common/components/contentContainer/contentContainer';
import { MoviesList } from '../../common/components/moviesList/moviesList';
import { MovieHeader } from './movieHeader/movieHeader';
import movies from '../search/mockedMovies';

export class Movie extends React.Component {
    componentWillMount() {
        this.loadMovieDetails(this.props.match.params.id);
        this.props.getPopularMovies();
    }

    componentWillReceiveProps(nextProps) {
        const id = nextProps.match.params.id;
        
        if (this.id !== id) {
            this.loadMovieDetails(id);
        }
    }

    loadMovieDetails(id) {
        this.id = id;
        this.props.getMovieInfo(id);
    }

    render() {
        if ( !this.props.movie) {
            return null;
        }

        return (
            <div>
                <MovieHeader movie={ this.props.movie }/>
                <ContentContainer>
                    <MoviesList movies={ this.props.movies } />
                </ContentContainer>
            </div>
        );
    } 
}