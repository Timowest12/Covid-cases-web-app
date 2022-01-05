import React from 'react'
import { Link } from 'react-router-dom'


const MainBlock = (props) => {
    return (
        <Link to={`/infopage/${props.obj.Country}`}>
        <div className='mainCountryBlock'>
            <div>
            {props.obj.Country}
            
            </div>
            <img className='countryImg' src={`/all/${props.obj.CountryCode.toLowerCase()}/vector.svg`} alt="" />
        </div>
        </Link>
    )
}

export default MainBlock
