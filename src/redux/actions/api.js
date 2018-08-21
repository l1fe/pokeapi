import { api } from '../types';

export const fetchPokemons = () => ({
  type: api.fetchPokemons.request,
});
