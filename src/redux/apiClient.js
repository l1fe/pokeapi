import axios from 'axios';

import { API_URL } from 'config';

const apiClient = {
  fetchPokemons: () => axios.get(`${API_URL}/pokemon/`),
};

export default apiClient;
