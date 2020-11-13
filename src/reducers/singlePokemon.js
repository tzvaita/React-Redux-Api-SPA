import Constant from '../common/constant';

const singlePokemon = (state = Constant.pokeDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'FETCH_SINGLE_DATA_SUCCESSFUL':
      return {
        ...state,
        loading: false,
        error: '',
        pokeData: action.payload,
      };
    case 'FETCH_SINGLE_DATA_FAILED':
      return {
        ...state,
        loading: false,
        error: 'Unable to find Pokemon',
      };
    default:
      return state;
  }
};

export default singlePokemon;
