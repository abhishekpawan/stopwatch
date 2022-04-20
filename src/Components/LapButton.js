import React from "react";

const LapButton = (props) => {
  return (
    <React.Fragment>
      <button disabled={!props.startState} onClick={props.lap}>Lap</button>
    </React.Fragment>
  );
};

export default LapButton;
