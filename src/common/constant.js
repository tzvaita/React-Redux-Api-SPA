const constant = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const defaultState = {
    pokemons: {
      loading: false,
      ourData: [],
      error: '',
    },
    filter: 'ALL',
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
