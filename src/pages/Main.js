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
    return (
        <div>
          {countries.map((countrObj) => 
              <MainBlock txt={countrObj.Country} />
          )}
          hello
          
        </div>
    )
}

export default Main
