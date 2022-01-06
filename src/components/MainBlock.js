import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';

const MainBlock = props => {
    
    let curmetric = [props]
    let image = `/all/${props.obj.CountryCode.toLowerCase()}/vector.svg`;

  return (
      <>
    <Link to={`/infopage/${props.obj.Country}`}>
          <BsArrowRightCircle className='toInfoCircle' />
      <div className="mainCountryBlock">
        <img
          className="countryImg"
          src={image}
          alt=""
        />
        <div className="mainBlockText">

        <div>{props.obj.Country}</div>
        <div>{props.obj[props.curmetric == false ? 'TotalConfirmed' : props.curmetric]}</div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default MainBlock;
