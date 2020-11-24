import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { fetchData, fetchSingleData } from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const fetchMock = new MockAdapter(axios);

describe('async actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
});

it('should get all pokemon information', () => {
  fetchMock.onGet('/').reply(200, {
    data: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3' },
    ],
  });

  store.dispatch(fetchData()).then(() => {
    const expectedActions = [{
      type: 'FETCH_DATA_SUCCESSFUL',
      payload: {
        data: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
          { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3' },
        ],
      },
    }];

    expect(store.getActions()).toEqual(expectedActions);
  }).catch(error => error);
});

it('Should get a single pokemon', () => {
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
