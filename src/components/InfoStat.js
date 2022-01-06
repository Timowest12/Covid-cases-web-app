import React from 'react';

const InfoStat = (props) => (
  <div className="infoStatsBlock">
    <div className="infoStat">
      <div className="infoStatLeft">{props.metric}</div>
      <div className="infoStatright">{props.amount}</div>
    </div>
  </div>

);

export default InfoStat;
