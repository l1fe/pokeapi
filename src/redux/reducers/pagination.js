import { combineReducers } from 'redux';

import { paginate } from '../utils';
import { api } from '../types';

const paginationReducer = combineReducers({
  pokemons: paginate({
    mapActionToKey: action => 'all',
    types: api.fetchPokemons,
  }),
});

export default paginationReducer;
