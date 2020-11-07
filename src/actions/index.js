export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

export const fetchDataSuccessful = ourData => ({
  type: 'FETCH_DATA_SUCCESSFUL',
  payload: ourData,
});

export const fetchDataFailed = error => ({
  type: 'FETCH_DATA_FAILED',
  payload: error,
});
