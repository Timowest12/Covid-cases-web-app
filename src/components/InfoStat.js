import React from 'react';

const InfoStat = (props) => {
  const { amount, metric } = props;
  return (
    <div className="infoStatsBlock">
      <div className="infoStat">
        <div className="infoStatLeft">{metric}</div>
        <div className="infoStatright">{amount}</div>
      </div>
    </div>
  );
};

export default InfoStat;
