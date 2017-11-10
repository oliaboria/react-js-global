import { 
    IMG_URL
} from '../common/config/api';

import imgNotFound from '../assets/img/no_img_found.png';

import {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_ERROR
} from '../common/constants/actions';

const initialState = {
    foundedMovie: null
};

function handleMovie(movie) {
    return {
        showId: movie.id,
        showTitle: movie.title,
        poster: movie.poster_path ? `${IMG_URL}${movie.poster_path}` : imgNotFound,
        rating: movie.vote_average,
        releaseYear: movie.release_date ? new Date(movie.release_date).getFullYear() : '',
        runtime: movie.runtime,
        summary: movie.overview,
        tagline: movie.tagline,
        category: movie.genres.map(genre => genre.name).join(' '),
        companies: movie.production_companies.map(company => company.name).join(', ')
    };
}

export function movieDetail(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
        return Object.assign({}, state, { foundedMovie: handleMovie(action.payload) });
    case FETCH_MOVIE_ERROR:
      return state;
    default:
      return state;
  }
}