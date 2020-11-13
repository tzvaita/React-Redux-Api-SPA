import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { fetchSingleData } from '../actions';

const PokeMon = props => {
  const { fetchSingleData, match, pokeData } = props;
  const pokemonName = match.params.pokemon;
  useEffect(() => {
    fetchSingleData(pokemonName);
  }, []);

  if (pokeData.loading) {
    return <p>Loading...</p>;
  }

  if (!_.isEmpty(pokeData.pokeData)) {
    const data = pokeData.pokeData;
    return (
      <div>
        <h1>Sprites</h1>
        <img src={data.sprites.back_default} alt="really now" />

      </div>
    );
  }

  if (pokeData.error !== '') {
    return <p>there is an error</p>;
  }

  return <p> Unable</p>;
};

PokeMon.propTypes = {
  pokeData: PropTypes.shape({
    loading: PropTypes.bool,
    pokeData: PropTypes.object || null,
    error: PropTypes.string,
  }).isRequired,
  fetchSingleData: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  pokeData: state.singlePokemon,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleData: pokemon => dispatch(fetchSingleData(pokemon)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeMon);
