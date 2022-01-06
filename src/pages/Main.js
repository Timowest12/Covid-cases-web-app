import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchCountryInfo } from '../API';
import MainBlock from '../components/MainBlock';
import MainHeaderBlock from '../components/MainHeaderBlock';

const Main = () => {
  const dispatch = useDispatch();
  const [countryState, setCountryState] = useState('TotalConfirmed');
  const [reverse, setReverse] = useState(false);
  const [countriesupdated, setcountriesupdated] = useState(false);

  if(countriesupdated == 'superdata'){
    setcountriesupdated(reverse)
    setcountriesupdated(countryState)
  }

  if (countriesupdated == true) {
    setcountriesupdated(false);
  }

  useEffect(() => {
    dispatch(fetchCountryInfo());
  }, []);
  let countries = useSelector((state) => state);

  const changeMetric = (e) => {
    const metric = e.target.value;

    setcountriesupdated(metric);
    updateList();
  };
  const updateList = () => {
    countries = countries.sort(
      (a, b) => b[countriesupdated] - a[countriesupdated],
    );
  };
  const changeOrder = (e) => {
    countries = countries.reverse();
    setReverse(e.target.value);
  };

  return (
    <div>
      <MainHeaderBlock />
      <div className="indicationStripe">
        <div className="indicationStripeText">sort stats by: </div>
        <div className="selects">
          <select onChange={changeMetric}>
            <option value="TotalConfirmed">Total cases</option>
            <option value="TotalDeaths">Total deaths</option>
            <option value="NewConfirmed">New cases</option>
            <option value="NewDeaths">New deaths</option>
          </select>
          <select onChange={changeOrder}>
            <option value="normal">high to low</option>
            <option value="reversed">Low to high</option>
          </select>
        </div>
      </div>
      <div className="mainTxtStripe">All countries</div>
      <div className="mainCountryWrapper">
        {countries.map((countrObj, index) => (
          <MainBlock
            index={index}
            obj={countrObj}
            key={uuidv4()}
            curmetric={countriesupdated}
          />
        ))}
      </div>
      hello
    </div>
  );
};

export default Main;
