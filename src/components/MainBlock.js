import React from 'react'

const MainBlock = (props) => {
    return (
        <div className='mainCountryBlock'>
            {props.obj.Country}
        </div>
    )
}

export default MainBlock
