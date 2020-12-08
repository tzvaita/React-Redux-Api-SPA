const constant = () => {
  const categories = ['bug', 'fire', 'grass', 'normal', 'water'];
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
