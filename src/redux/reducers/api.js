import { api } from '../types';

const initialState = {
  pokemons: {
    loading: false,
    items: [],
    info: {},
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === api.fetchPokemons.request) {
    return {
      ...state,
      pokemons: {
        ...state.pokemons,
        loading: true,
      },
    };
  }

  return state;
};

export default reducer;
