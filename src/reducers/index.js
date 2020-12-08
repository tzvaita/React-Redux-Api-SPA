import { combineReducers } from 'redux';
import pokemon from './pokemon';
import singlePokemon from './singlePokemon';
import filter from './filter';

const RootReducer = combineReducers({ pokemon, singlePokemon, filter });

export default RootReducer;
