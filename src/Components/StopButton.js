import React from "react";

const StopButton = (props) => {
  return (
    <React.Fragment>
      <button disabled={!props.startState} onClick={props.stop}>Stop</button>
    </React.Fragment>
  );
};

export default StopButton;
