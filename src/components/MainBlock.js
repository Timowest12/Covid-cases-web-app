import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';

const MainBlock = props => {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  function handleResize() {
    setTimeout(function() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
  }, 100);
    
  
}

  window.addEventListener('resize', handleResize)
    let curmetric = [props]
    let image = `/all/${props.obj.CountryCode.toLowerCase()}/vector.svg`;
    let colClass;
    if (window.innerWidth > 400 && window.innerWidth < 600) {
      
      if ((props.index) % 4 == 1 || (props.index - 1) % 4 == 1) {
        colClass = 'evencol'
      }else{
        colClass = 'oddcol'
      }
    }else{
      if ((props.index) % 2 == 1) {
        colClass = 'evencol'
      }else{
        colClass = 'oddcol'
      }
    }
  return (
      <>
    <Link to={`/infopage/${props.obj.Country}`}>
      
          
      <div className={`mainCountryBlock ${colClass}`}>
        <img
          className="countryImg"
          src={image}
          alt=""
        />
        
        <BsArrowRightCircle className='toInfoCircle' />
        <div className="mainBlockText txtAighnRight">

        <div className='mainBlockCountryTxt'>{props.obj.Country}</div>
        <div className='mainBlockCountryNmbr'>{props.obj[props.curmetric == false ? 'TotalConfirmed' : props.curmetric]}</div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default MainBlock;
