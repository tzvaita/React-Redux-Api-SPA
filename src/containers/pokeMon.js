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
        <div>
          <img src={data.sprites.back_default} alt="really now" />
          <img src={data.sprites.front_default} alt="really now" />
          <img src={data.sprites.front_shiny} alt="really now" />
          <img src={data.sprites.back_shiny} alt="really now" />
        </div>
        <div>
          <h1>Stats</h1>
          {data.stats.map(stat => (
            <p key={Math.random()}>
              {stat.stat.name}
              {stat.base_stat}
            </p>
          ))}
        </div>
        <div>
          <h1>Abilities</h1>
          {data.abilities.map(stat => (
            <p key={Math.random()}>
              {stat.ability.name}
            </p>
          ))}
        </div>
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
