import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData } from '../actions';

const PokeList = ({ userData, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  if (userData.ourData !== []) {
    return userData.ourData.map(pok => <p key={Math.random()}>{pok.name}</p>);
  }

  if (userData.loading === true) {
    return <p>Loading...</p>;
  }

  if (userData.error !== '') {
    return <p>{userData.errMsg}</p>;
  }

  return <p> Unable</p>;
};

PokeList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userData: state.pokemon,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
