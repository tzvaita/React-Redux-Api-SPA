import axios from 'axios';
// actions for name list request

export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

const fetchDataSuccessful = ourData => ({
  type: 'FETCH_DATA_SUCCESSFUL',
  payload: ourData,
});

const fetchDataFailed = error => ({
  type: 'FETCH_DATA_FAILED',
  payload: error,
});

// actions for single pokemon request

export const fetchSingleDataRequest = () => ({
  type: 'FETCH_SINGLE_DATA_REQUEST',
});

const fetchSingleDataSuccessful = pokeData => ({
  type: 'FETCH_SINGLE_DATA_SUCCESSFUL',
  payload: pokeData,
});

const fetchSingleDataFailed = error => ({
  type: 'FETCH_SINGLE_DATA_FAILED',
  payload: error,
});

export const fetchData = () => dispatch => {
  dispatch(fetchDataRequest);
  return axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      const ourData = response.data.results;
      dispatch(fetchDataSuccessful(ourData));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchDataFailed(errorMsg));
    });
};

export const fetchSingleData = pokemon => dispatch => {
  dispatch(fetchSingleDataRequest);
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
      const ourData = response.data;
      dispatch(fetchSingleDataSuccessful(ourData));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchSingleDataFailed(errorMsg));
    });
};
