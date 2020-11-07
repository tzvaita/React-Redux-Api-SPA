import axios from 'axios';

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

export const fetchData = () => dispatch => {
  dispatch(fetchDataRequest);
  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      const theData = response.data;
      dispatch(fetchDataSuccessful(theData));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchDataFailed(errorMsg));
    });
};
