import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const MainBlock = (props) => {
  const { obj, index, curmetric } = props;
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  function handleResize() {
    setTimeout(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);
  }

  window.addEventListener('resize', handleResize);
  if (curmetric === 'vaccine') {
    setDimensions(dimensions);
  }
  const image = `/all/${obj.CountryCode.toLowerCase()}/vector.svg`;
  let colClass;
  if (window.innerWidth > 400 && window.innerWidth < 600) {
    if ((index) % 4 === 1 || (index - 1) % 4 === 1) {
      colClass = 'evencol';
    } else {
      colClass = 'oddcol';
    }
  } else if ((index) % 2 === 1) {
    colClass = 'evencol';
  } else {
    colClass = 'oddcol';
  }
  return (
    <>
      <Link to={`/infopage/${obj.Country}`}>

        <div className={`mainCountryBlock ${colClass}`}>
          <img
            className="countryImg"
            src={image}
            alt=""
          />

          <BsArrowRightCircle className="toInfoCircle" />
          <div className="mainBlockText txtAighnRight">

            <div className="mainBlockCountryTxt">{obj.Country}</div>
            <div className="mainBlockCountryNmbr">{obj[curmetric === false ? 'TotalConfirmed' : curmetric]}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainBlock;
