import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    SORT_MOVIES
} from '../common/constants/actions';

const initialState = {
    foundedMovies: [],
    sort: 'releaseYear'
};
  
function handleMovies(movies) {
    return movies.map(movie => ({
        showId: movie.id,
        showTitle: movie.title,
        releaseYear: new Date(movie.release_date).getFullYear(),
        rating: movie.vote_average,
        poster: movie.poster_path
    }));
}

function sortMovies(movies, sortType) {
    const sortedMovies = [...movies];
    const propsBySortType = {
      'release date': 'releaseYear',
      rating: 'rating',
    };

    const sortProp = propsBySortType[sortType];

    sortedMovies.sort((a, b) => (b[sortProp] > a[sortProp] ? 1 : -1));
    return sortedMovies;
  }
  
  export function searchMovies(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS:
            return Object.assign({}, state, { foundedMovies: handleMovies(action.payload) });
        case FETCH_MOVIES_ERROR:
            return state;
        case SORT_MOVIES:
            return Object.assign({}, state, { 
                foundedMovies: sortMovies(state.foundedMovies, action.payload),
                sort: action.payload
            });
        default:
            return state;
    }
  }