import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

const InfoPage = () => {
    const { country } = useParams();
    const countries = useSelector((state) => state);
    const countryObj = countries.find(element => element.Country == country)
    console.log(countryObj)
    return (
        <div>
            <div className='infoHeader'>
                <div className="infoheaderLeft">
                <img className='countryImgInfoPage' src={`/all/${countryObj.CountryCode.toLowerCase()}/vector.svg`} alt="" />
                </div>
                <div className="infoheaderRight">
                    {countryObj.Country}
                </div>
            </div>
            <div className="indicationStripe">
                stats:
            </div>
            <div className="infoStatsBlock">
                <div className="infoStat">
                    <div className="infoStatLeft">Total cases:</div>
                    <div className="infoStatright">{countryObj.TotalConfirmed}</div>
                </div>
            </div>
            <div className="infoStatsBlock">
                <div className="infoStat">
                    <div className="infoStatLeft">Total deaths:</div>
                    <div className="infoStatright">{countryObj.TotalDeaths}</div>
                </div>
            </div>
            <div className="infoStatsBlock">
                <div className="infoStat">
                    <div className="infoStatLeft">New cases:</div>
                    <div className="infoStatright">{countryObj.NewConfirmed}</div>
                </div>
            </div>
            <div className="infoStatsBlock">
                <div className="infoStat">
                    <div className="infoStatLeft">new deaths:</div>
                    <div className="infoStatright">{countryObj.NewDeaths}</div>
                </div>
            </div>
            <div className="infoStatsBlock">
                <div className="infoStat">
                    <div className="infoStatLeft">new recovered:</div>
                    <div className="infoStatright">{countryObj.NewRecovered}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage
