import {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_ERROR
} from '../common/constants/actions';

import {
    API_KEY,
    API_URL
} from '../common/config/api';

import { checkStatus } from '../utils/checkStatus';

function getMovieSuccess(movie) {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    };
}

function getMovieErr() {
    return {
        type: FETCH_MOVIE_ERROR
    };
}

export function getMovieInfo(movieId) {
    return (dispatch) => {
        fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`)
            .then(checkStatus)
            .then(json => json.json())
            .then(json => dispatch(getMovieSuccess(json)))
            .catch(ex => dispatch(getMovieErr(ex)));
    };
}