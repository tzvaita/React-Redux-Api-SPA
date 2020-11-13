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
      <div className="pokeCont">
        <h1 className="name">{data.name}</h1>
        <h1 className="headings">Sprites</h1>
        <div className="cont">
          <img src={data.sprites.back_default} alt="sprite here" />
          <img src={data.sprites.front_default} alt="sprite here" />
          <img src={data.sprites.front_shiny} alt="sprite here" />
          <img src={data.sprites.back_shiny} alt="sprite here" />
        </div>
        <div className="cont">
          <h1 className="headings">Stats</h1>
          {data.stats.map(stat => (
            <p key={Math.random()} className="stat">
              {stat.stat.name}
              :
              {stat.base_stat}
            </p>
          ))}
        </div>
        <div className="cont">
          <h1 className="headings">Abilities</h1>
          {data.abilities.map(stat => (
            <p key={Math.random()} className="stat">
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

  return <p> Loading...</p>;
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
