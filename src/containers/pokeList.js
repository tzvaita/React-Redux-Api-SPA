import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchData } from '../actions';

const PokeList = ({ userData, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  if (userData.loading) {
    return <p>Loading...</p>;
  }

  if (userData.ourData !== []) {
    return userData.ourData.map(pok => (
      <div key={Math.random()}>
        <p>{pok.name}</p>
        <Link to={`/pokemon/${pok.name}`}>View</Link>
      </div>
    ));
  }

  if (userData.error !== '') {
    return <p>{userData.error}</p>;
  }

  return <p> Unable</p>;
};

PokeList.propTypes = {
  userData: PropTypes.shape({
    loading: PropTypes.bool,
    ourData: PropTypes.arrayOf(PropTypes.object) || null,
    error: PropTypes.string,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userData: state.pokemon,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
