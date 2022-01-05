import React, { useEffect, useState } from 'react'
import { fetchCountryInfo, getAllData } from '../API'
import { useDispatch,useSelector } from "react-redux";
import MainBlock from '../components/MainBlock';
import MainHeaderBlock from '../components/MainHeaderBlock';


const Main = () => {
    
    const dispatch = useDispatch();
   const [countryState, setCountryState] = useState([])
   const [countriesupdated, setcountriesupdated] = useState(false)
   if (countriesupdated == true) {
       
       setcountriesupdated(false)
   }
    
    useEffect(() => {
        dispatch(fetchCountryInfo())
      },[]);
      let countries = useSelector((state) => state);
      //setCountryState(countries)
      const changeMetric = (e) => {
          const metric = e.target.value
          countries = countries.sort((a,b) => b[metric] - a[metric])
          setcountriesupdated(true)
          //alert(countries[10].Country)
        //alert(metric)
    }
    return (
        <div>
            <MainHeaderBlock />
            <div className="indicationStripe">
                stats sorted by: <select onChange={changeMetric} name="" id="">
                    <option value="TotalConfirmed">Total cases</option>
                    <option value="TotalDeaths">Total deaths</option>
                    <option value="TotalRecovered">Total recovered</option>
                    <option value="NewConfirmed">New cases</option>
                    <option value="NewDeaths">New deaths</option>
                    <option value="NewRecovered">New recovered</option>
                </select>
            </div>
            <div className='mainCountryWrapper'>
          {countries.map((countrObj) => 
              <MainBlock obj={countrObj} />
          )}
          </div>
          hello
          
        </div>
    )
}

export default Main
