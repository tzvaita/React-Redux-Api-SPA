import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchData } from '../actions';

const PokeList = ({ userData, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  if (userData.loading) {
    return <p>Loading...</p>;
  }

  if (!_.isEmpty(userData.ourData)) {
    return userData.ourData.map(pok => (
      <div key={userData.ourData.indexOf(pok)}>
        <p>{pok.name}</p>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${userData.ourData.indexOf(pok) + 1}.png`} alt="POKEMON" />
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
