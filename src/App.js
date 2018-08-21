import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux/store/configureStore';
import { Pokemons } from 'containers';

import './styles/base.scss';

const preloadedState = { };
const store = configureStore(preloadedState);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>PokeApp</h1>

      <Pokemons />
    </div>
  </Provider>
);

export default App;
