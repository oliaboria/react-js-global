import { combineReducers } from 'redux';

import { searchMovies } from './searchMovies';

const rootReducer = combineReducers({
    searchMovies
});

export default rootReducer;
