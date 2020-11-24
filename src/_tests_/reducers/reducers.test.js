import pokemon from '../../reducers/pokemon';
import singlePokemon from '../../reducers/singlePokemon';

describe('Test for initial state', () => {
  it('Checks for a correct initial state', () => {
    const action = {
      type: 'default',
    };

    const initialState = {
      loading: false,
      ourData: [],
      error: '',
    };

    expect(pokemon(undefined, action)).toEqual(initialState);
  });
});

describe('All pokemons list', () => {
  it('returns the correct state', () => {
    const action = {
      type: 'FETCH_DATA_SUCCESSFUL',
      payload: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3' },
      ],
    };

    const expectedState = {
      loading: false,
      ourData: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3' },
      ],
    };

    expect(pokemon(undefined, action)).toEqual(expectedState);
  });
});

describe('Single pokemon list', () => {
  it('returns correct state for single pokemon', () => {
    const action = {
      type: 'FETCH_SINGLE_DATA_SUCCESSFUL',
      payload: {
        name: 'ditto',
      },
    };

    const expectedState = {
      loading: false,
      pokeData: {
        name: 'ditto',
      },
      error: '',
    };

    expect(singlePokemon(undefined, action)).toEqual(expectedState);
  });
});
