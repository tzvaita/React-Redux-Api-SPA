const constant = () => {
  const defaultState = {
    loading: false,
    ourData: [],
    error: '',
  };

  const pokeDefaultState = {
    loading: false,
    pokeData: [],
    error: '',
  };

  return {
    defaultState,
    pokeDefaultState,
  };
};

export default constant();
