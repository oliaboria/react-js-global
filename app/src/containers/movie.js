import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../actions/SearchActions';
import { getMovieInfo } from '../actions/movieActions';
import { Movie } from '../components/movie/movie';


function mapStateToProps(state) {
    return {
        movies: state.searchMovies.foundedMovies,
        movie: state.movieDetail.foundedMovie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPopularMovies: bindActionCreators(searchActions.fetchPopularMovies, dispatch),
        getMovieInfo: bindActionCreators(getMovieInfo, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);