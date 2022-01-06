import axios from 'axios';

export const baseurl = 'https://api.covid19api.com/summary';

export const fetchCountryInfo = () => async (dispatch) => {
  const response = await axios.get(baseurl);
  dispatch({
    type: 'updateCountryData',
    payload: response.data.Countries,
  });
};
