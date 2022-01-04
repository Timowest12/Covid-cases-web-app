import { createStore, combineReducers, applyMiddleware } from 'redux';// eslint-disable-line
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = (state = initialState, action) => {
  // Do something here
}

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;