import React, { useEffect, useState } from 'react'
import { fetchCountryInfo, getAllData } from '../API'
import { useDispatch,useSelector } from "react-redux";
import MainBlock from '../components/MainBlock';


const Main = () => {
    const dispatch = useDispatch();
   
    
    useEffect(() => {
        dispatch(fetchCountryInfo())
      },[]);
      const countries = useSelector((state) => state);
     // alert(countries.length)
    return (
        <div>
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
