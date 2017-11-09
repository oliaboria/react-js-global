import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    SORT_MOVIES
} from '../common/constants/actions';

import {
    API_KEY,
    API_URL
} from '../common/config/api';

import { checkStatus } from '../utils/checkStatus';

export function fetchMoviesSuccess(movies) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies.results
    };
}

export function fetchMoviesError() {
    return {
        type: FETCH_MOVIES_ERROR
    };
}

export function sortMovies(sortType) {
    return {
        type: SORT_MOVIES,
        payload: sortType
    };
}

export function fetchMoviesByName(name) {
    return (dispath) => {
        fetch(`${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`)
            .then(checkStatus)
            .then(json => json.json())
            .then(json => dispath(fetchMoviesSuccess(json)))
            .catch(e => dispath(fetchMoviesError(e)));
    }
}

export function fetchPopularMovies() {
    return (dispath) => {
        fetch(`${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(checkStatus)
            .then(json => json.json())
            .then(json => dispath(fetchMoviesSuccess(json)))
            .catch(e => dispath(fetchMoviesError(e)));
    }
}