import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import InfoStat from '../components/InfoStat';

const InfoPage = () => {
    const { country } = useParams();
    const countries = useSelector((state) => state);
    const countryObj = countries.find(element => element.Country == country)
    console.log(countryObj)
    return (
        <div>
            <div className='infohead'>
                <div className="infoheaderLeft">
                <img className='countryImgInfoPage' src={`/all/${countryObj.CountryCode.toLowerCase()}/vector.svg`} alt="" />
                </div>
                <div className="infoheaderRight">
                    {countryObj.Country}
                </div>
            </div>
            <div className="mainTxtStripe">
                stats:
            </div>
            <InfoStat metric='Total casess:' amount={countryObj.TotalConfirmed} />
            <InfoStat metric='Total deaths:' amount={countryObj.TotalDeaths} />
            <InfoStat metric='New cases:' amount={countryObj.TotalDeaths} />
            <InfoStat metric='New deaths:' amount={countryObj.TotalDeaths} />
            
            
        </div>
    )
}

export default InfoPage
