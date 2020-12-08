import Constant from '../common/constant';

const filter = (state = Constant.defaultState.filter, action) => {
  let updated;
  switch (action.type) {
    case 'CHANGE_FILTER':
      updated = action.category;
      return updated;
    default:
      return state;
  }
};

export default filter;
