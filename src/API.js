import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from "axios"

export const baseurl = 'https://api.covid19api.com/summary';
/* export const getAllData = () => Axios.get(baseurl)
.then(response => {
    console.log(response.data.Countries)
    return response.data.Countries;
})
.catch(error => {
    console.error('There was an error!', error);
}); */

/* export const fetchCountryInfo = () => async (dispatch) => {
    const response = await axios.get(baseurl);
    dispatch({
      type: 'updateCountryData',
      payload: response.data.Countries,
    });
  }; */
/*   export function fetchCountryInfo() {
    return async function(dispatch) {
      return await axios.get(baseurl)
        .then(( data ) => {
            dispatch({
                type: 'updateCountryData',
                payload: data.data.Countries,
              });
      });
    };
  } */

  export const fetchCountryInfo = () => {
    return async (dispatch,getState) => {
        const response = await axios.get(baseurl)
        //console.log(response.data)
        dispatch({
            type:'updateCountryData',
            payload:response.data.Countries
        })
    }
} 
