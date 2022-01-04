import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';// eslint-disable-line
import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const baseurl = 'https://api.covid19api.com/summary';




const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type == 'updateCountryData') {
      return [action.payload]
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;