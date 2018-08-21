import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas'
import createdReducers from '../reducers';

const configureStore = (preloadedState) => {
  const rootReducer = combineReducers({
    ...createdReducers,
  });

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer = applyMiddleware(...middleware);

  const store = createStore(rootReducer, preloadedState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
