import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { fetchSingleData } from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const fetchMock = new MockAdapter(axios);

describe('async actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
});

it('Should get information from api', () => {
  fetchMock.onGet('/pokemon/pokemon').reply(200, {
    data: {
      name: 'bulbasaur',
      stats: [
        { base_stat: 45, effort: 0 },
        { base_stat: 49, effort: 0 },
        { base_stat: 49, effort: 0 },
        { base_stat: 65, effort: 1 },
        { base_stat: 65, effort: 0 },
        { base_stat: 45, effort: 0 },
      ],
    },
  });

  store.dispatch(fetchSingleData('bulbasaur')).then(() => {
    const expectedActions = [{
      type: 'FETCH_SINGLE_DATA_SUCCESSFUL',
      payload: {
        data: {
          name: 'bulbasaur',
          stats: [
            { base_stat: 45, effort: 0 },
            { base_stat: 49, effort: 0 },
            { base_stat: 49, effort: 0 },
            { base_stat: 65, effort: 1 },
            { base_stat: 65, effort: 0 },
            { base_stat: 45, effort: 0 },
          ],
        },
      },
    }];

    expect(store.getActions().toEqual(expectedActions));
  }).catch(error => error);
});
