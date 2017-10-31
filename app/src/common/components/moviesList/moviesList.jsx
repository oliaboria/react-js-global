import React from 'react';
import styled from 'styled-components';

import { MoviePreview } from '..//moviePreview/moviePreview';

const MoviesListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export class MoviesList extends React.Component {
    render() {
        const content = this.props.movies.map((movie) => {
            return <MoviePreview movie={ movie } key={ movie.showId }/>
        });

        return (
            <MoviesListWrapper>{ content }</MoviesListWrapper>
        );
    } 
}