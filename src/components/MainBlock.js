import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';

const MainBlock = props => {
    
    let curmetric = [props]
    let image = `/all/${props.obj.CountryCode.toLowerCase()}/vector.svg`;
    let colClass;
    if (props.index % 2 == 1) {
      colClass = 'evencol'
    }else{
      colClass = 'oddcol'
    }

  return (
      <>
    <Link to={`/infopage/${props.obj.Country}`}>
      <div className="">{props.index % 2 == 1 ? console.log('hi') : null}</div>
          <BsArrowRightCircle className='toInfoCircle' />
      <div className={`mainCountryBlock ${colClass}`}>
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
