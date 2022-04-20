import React from "react";

const ResetButton = (props) => {
  return (
    <React.Fragment>
      <button disabled={!props.stopState} onClick={props.reset}>Reset</button>
    </React.Fragment>
  );
};

export default ResetButton;
