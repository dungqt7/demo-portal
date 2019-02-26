import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import root from "../sagas/index";
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
      ...createStore(rootReducer,
        applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run(root)
    };
  };
export default configureStore;