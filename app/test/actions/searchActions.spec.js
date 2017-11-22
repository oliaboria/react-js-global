import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actions from '../../src/actions/searchActions';
import * as apiConfig from '../../src/common/config/api';
import * as types from '../../src/common/constants/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

  it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
    const url = `${apiConfig.API_URL}/discover/movie?sort_by=popularity.desc&api_key=${apiConfig.API_KEY}`;

    fetchMock.getOnce(url, { results: []});

    const expectedActions = [
        { type: types.FETCH_MOVIES_SUCCESS,
          payload: [] }
    ];

    const store = mockStore({ foundedMovies: [] });

    return store.dispatch(actions.fetchPopularMovies())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });