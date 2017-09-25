import React from 'react';
import styled from 'styled-components';

import { MoviePreview } from '../../common/components/moviePreview/moviePreview';
import { NoFilmsFound } from './noFilmsFound/noFilmsFound';

const MoviesListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export class MoviesList extends React.Component {
    constructor(props) {
        super(props);

        this.movies = this.props.movies;

        this.state = {
            hasMovies: !!this.movies.length
        }
    }

    render() {
        let content = [];

        if (this.state.hasMovies) {
            content = this.movies.map((movie) => {
                return <MoviePreview movie={ movie } key={ movie.showId }/>
            });
        } else {
            content = [<NoFilmsFound />];
        }

        return (
            <MoviesListWrapper>{ content }</MoviesListWrapper>
        );
    } 
}