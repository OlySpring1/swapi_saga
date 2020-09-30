import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// mount it in the Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  ),
);
// then run saga
sagaMiddleware.run(rootSaga)

export default store;
