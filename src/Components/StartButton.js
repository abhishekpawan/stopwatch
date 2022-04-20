import React from 'react'

const StartButton = (props) => {
  return (
    <React.Fragment>
        <button disabled={props.startState} className='start' onClick={props.start}>Start</button>
    </React.Fragment>
  )
}

export default StartButton