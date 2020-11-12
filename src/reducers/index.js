import { combineReducers } from 'redux';
import pokemon from './pokemon';
import singlePokemon from './singlePokemon';

const RootReducer = combineReducers({ pokemon, singlePokemon });

export default RootReducer;
