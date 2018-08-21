import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas'
import createdReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const reducers = combineReducers({
  ...createdReducers,
});

const store = createStore(reducers, {}, enhancer);

sagaMiddleware.run(rootSaga)

export default store;
