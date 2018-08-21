import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import createdReducers from './reducers';

const middleware = [];

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const reducers = combineReducers({
  ...createdReducers,
});

const store = createStore(reducers, {}, enhancer);

export default store;
