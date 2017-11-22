import { searchMovies } from '../../src/reducers/searchMovies';
import * as types from '../../src/common/constants/actions';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(searchMovies(undefined, {})).toEqual(
            {
                foundedMovies: [],
                sort: 'releaseYear'
            }
        );
    });

    it('should handle FETCH_MOVIES_SUCCESS', () => {
        const expected = {
            showTitle: 'new film',
            poster: 'https://image.tmdb.org/t/p/w500undefined',
            rating: undefined,
            releaseYear: '',
            showId: undefined,
            showTitle: undefined
        };

        expect(
            searchMovies({}, {
                type: types.FETCH_MOVIES_SUCCESS,
                payload:  [ expected ]
            })
            ).toEqual({
                foundedMovies: [expected]
        });
    });
})