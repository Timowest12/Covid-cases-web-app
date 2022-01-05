import React from 'react'
import { useParams } from 'react-router'

const InfoPage = () => {
    const { country } = useParams();
    return (
        <div>
            {country}
        </div>
    )
}

export default InfoPage
