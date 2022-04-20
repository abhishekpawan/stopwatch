import React from "react";

import "./StopWatchTimer.css";

const StopWatchTimer = (props) => {
  return (
    <React.Fragment>
      <div className="dial">
        <div className="innerDial">
          <div className="timer">
            <h1>
              {props.time.hour >= 10 ? props.time.hour : "0" + props.time.hour}:
              {props.time.min >= 10 ? props.time.min : "0" + props.time.min}:
              {props.time.sec >= 10 ? props.time.sec : "0" + props.time.sec}
            </h1>
            <p>{props.time.msec >= 10 ? props.time.msec : "0" + props.time.msec}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StopWatchTimer;
