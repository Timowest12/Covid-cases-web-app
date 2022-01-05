import React, { useEffect, useState } from 'react'
import { fetchCountryInfo, getAllData } from '../API'
import { useDispatch,useSelector } from "react-redux";


const Main = () => {
    const dispatch = useDispatch();
   
    
    useEffect(() => {
        dispatch(fetchCountryInfo())
      },[]);
    return (
        <div>
          hello
        </div>
    )
}

export default Main
