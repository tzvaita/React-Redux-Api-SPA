const constant = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const defaultState = {
    loading: false,
    ourData: [],
    error: '',
  };

  const pokeDefaultState = {
    loading: false,
    pokeData: {},
    error: '',
  };

  return {
    categories,
    defaultState,
    pokeDefaultState,
  };
};

export default constant();
