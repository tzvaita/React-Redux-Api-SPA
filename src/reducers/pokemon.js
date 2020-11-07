import Constant from '../common/constant';

const pokemon = (state = Constant.defaultState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_SUCCESSFUL':
      return {
        loading: true,
        ourData: action.payload,
      };
    case 'FETCH_DATA_FAILED':
      return {
        loading: false,
        ourData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemon;
