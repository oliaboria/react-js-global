import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from '../../common/components/contentContainer/contentContainer';
import { MoviesList } from '../../common/components/moviesList/moviesList';
import movies from './mockedMovies';
import { SearchHeader } from './searchHeader/searchHeader';

export class Search extends React.Component {
    componentWillMount() {
        this.getMovies(this.props.match.params.query);
    }

    componentWillReceiveProps(nextProps) {
        this.getMovies(nextProps.match.params.query);
    }

    getMovies(query) {
        if (this.query !== query) {
            this.query = query;
            this.props.searchAction.fetchMoviesByName(this.query);
        }
    }

    render() {
        return (
            <div>
                <SearchHeader history={ this.props.history }
                              moviesNumber={ this.props.movies.length } 
                              selectedSort={ this.props.sort }
                              sortAction={ this.props.searchAction.sortMovies }/>
                <ContentContainer>
                    <MoviesList movies={ this.props.movies } />
                </ContentContainer>
            </div>
        );
    } 
}