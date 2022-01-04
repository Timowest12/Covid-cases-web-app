import React, { useEffect } from 'react'
import { fetchCountryInfo, getAllData } from '../API'
import { useDispatch} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchCountryInfo())
     }, [])
     
    return (
        <div>
            hello
        </div>
    )
}

export default Main
