import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import PropTypes from 'prop-types';
import { fetchData } from '../actions';

const PokeList = ({ userData, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  if (userData.ourData !== []) {
    return <p>Have data</p>;
  }

  if (userData.loading === true) {
    return <p>Loading...</p>;
  }

  if (userData.error !== '') {
    return <p>{userData.errMsg}</p>;
  }

  return <p> Unable</p>;
};

PokeList.defaultProps = {
  userData: [],
};

PokeList.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userData: state.data,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
