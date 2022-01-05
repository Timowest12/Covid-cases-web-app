import React from 'react'

const MainBlock = (props) => {
    return (
        <div className='mainCountryBlock'>
            <div>
            {props.obj.Country}
            
            </div>
            <img className='countryImg' src={`/all/${props.obj.CountryCode.toLowerCase()}/vector.svg`} alt="" />
        </div>
    )
}

export default MainBlock
