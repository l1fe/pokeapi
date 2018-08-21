import React from 'react';
import { Provider } from 'react-redux';

import store from 'redux/store';

import './styles/base.scss';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>PokeApp</h1>
    </div>
  </Provider>
);

export default App;
