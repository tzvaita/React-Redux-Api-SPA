import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSingleData } from '../actions';

const PokeMon = props => {
  const { fetchSingleData, match } = props;
  const pokemonName = match.params.pokemon;
  useEffect(() => {
    fetchSingleData(pokemonName);
  }, []);

  return (
    <div>
      Pokemon:
    </div>
  );
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
