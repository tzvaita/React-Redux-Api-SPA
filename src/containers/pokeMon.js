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
    pokeData: PropTypes.arrayOf(PropTypes.object) || null,
    error: PropTypes.string,
  }).isRequired,
  fetchSingleData: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // props: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  pokeData: state.singlePokemon.pokeData,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleData: pokemon => dispatch(fetchSingleData(pokemon)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeMon);
