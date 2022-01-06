import axios from "axios"

export const baseurl = 'https://api.covid19api.com/summary';

  export const fetchCountryInfo = () => {
    return async (dispatch,getState) => {
        const response = await axios.get(baseurl)
        dispatch({
            type:'updateCountryData',
            payload:response.data.Countries
        })
    }
} 
