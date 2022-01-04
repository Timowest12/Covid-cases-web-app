import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const axios = require('axios');

export const baseurl = 'https://api.covid19api.com/summary';
export const getAllData = () => axios.get(baseurl)
.then(response => {
    //console.log(response.data.Countries)
    return response.data.Countries;
})
.catch(error => {
    console.error('There was an error!', error);
});

export const fetchCountryInfo = () => async (dispatch) => {
    const response = await axios.get(baseurl);
    dispatch({
      type: 'updateCountryData',
      payload: response.data.Countries,
    });
  };
