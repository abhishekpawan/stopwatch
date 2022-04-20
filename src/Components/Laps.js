import React from "react";

import "./Laps.css";

const Laps = (props) => {
  // console.log();

  //finding the added time in each lap

  let addedHour = props.hour - props.addedLapTime.hour,
    addedMin = props.min - props.addedLapTime.min,
    addedSec = props.sec - props.addedLapTime.sec,
    addedMsec = props.msec - props.addedLapTime.msec;

  //manageing negative outcome of msec
  if (addedMsec < 0) {
    addedSec = addedSec - 1;
    addedMsec = 100 + addedMsec;
  }

  return (
    <React.Fragment>
      <div className="laps">
        <p>#{props.num}</p>
        <div className="time">
          <p>
            {props.hour >= 10 ? props.hour : "0" + props.hour} :{" "}
            {props.min >= 10 ? props.min : "0" + props.min} :{" "}
            {props.sec >= 10 ? props.sec : "0" + props.sec} :{" "}
            {props.msec >= 10 ? props.msec : "0" + props.msec}
          </p>
        </div>
        <div className="addedtime">
          <p>
            +{addedHour >= 10 ? addedHour : "0" + addedHour} :{" "}
            {addedMin >= 10 ? addedMin : "0" + addedMin} :{" "}
            {addedSec >= 10 ? addedSec : "0" + addedSec} :{" "}
            {addedMsec >= 10 ? addedMsec : "0" + addedMsec}
          </p>
        </div>
        <p>Lap {props.num}</p>
      </div>
    </React.Fragment>
  );
};

export default Laps;
