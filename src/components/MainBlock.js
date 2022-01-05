import React from "react";
import { Link } from "react-router-dom";

const MainBlock = props => {
    
    let curmetric = [props]

  return (
    <Link to={`/infopage/${props.obj.Country}`}>
      <div className="mainCountryBlock">
        <img
          className="countryImg"
          src={`/all/${props.obj.CountryCode.toLowerCase()}/vector.svg`}
          alt=""
        />
        <div className="mainBlockText">

        <div>{props.obj.Country}</div>
        <div>{props.obj[props.curmetric == false ? 'TotalConfirmed' : props.curmetric]}</div>
        </div>
      </div>
    </Link>
  );
};

export default MainBlock;
