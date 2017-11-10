import { combineReducers } from 'redux';

import { searchMovies } from './searchMovies';
import { movieDetail } from './movieReducer';

const rootReducer = combineReducers({
    movieDetail,
    searchMovies
});

export default rootReducer;
