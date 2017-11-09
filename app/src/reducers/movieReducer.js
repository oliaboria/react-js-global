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
        poster: movie.poster_path,
        rating: movie.vote_average,
        releaseYear: new Date(movie.release_date).getFullYear(),
        runtime: movie.runtime,
        summary: movie.overview,
        tagline: movie.tagline,
        category: movie.genres.reduce((res, genre) => res + ' ' + genre.name, ''),
        companies: movie.production_companies.reduce(
            (res, company, index, arr) => {
                if (index === arr.length - 1) {
                    return res + company.name;
                } else {
                    return res + company.name + ', '
                }
            }, '')
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