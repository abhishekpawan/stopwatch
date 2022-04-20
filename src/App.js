import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import StopWatchTimer from "./Components/StopWatchTimer";
import StartButton from "./Components/StartButton";
import StopButton from "./Components/StopButton";
import LapButton from "./Components/LapButton";
import ResetButton from "./Components/ResetButton";
import Laps from "./Components/Laps";

function App() {
  //stopwatch timer content
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0, msec: 0 });
  const [interv, setInterv] = useState();
  const [num,setNum] = useState(1)
  const [startState, setStartState] = useState(false);
  const [stopState, setStopState] = useState(false);
  const [laps, setLaps] = useState([]);
  const [addedLapTime, setaddedLapTime] = useState({ hour: 0, min: 0, sec: 0, msec: 0 });

 
  //start button function
  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStartState(true)
    setStopState(false)

  };

  //stop button function
  const stop = () => {
    clearInterval(interv);
    setStartState(false)
    setStopState(true)
  };


  //lap button function
  const lap = () => {
    setNum(num+1)

    setaddedLapTime({
      hour:time.hour,
      min:time.min,
      sec:time.sec,
      msec:time.msec,
    })
    
    const lapData= {
      num,
      hour:time.hour,
      min:time.min,
      sec:time.sec,
      msec:time.msec,
      addedLapTime,
    
    }


    setLaps((prevLaps)=>{
      return[lapData, ...prevLaps];
    })
    
  };

  //reset button function
  const reset = () => {
    setTime({ hour: 0, min: 0, sec: 0, msec: 0 });
    setLaps([]);
    setNum(1)
    setStartState(false)
    setStopState(false)
    setaddedLapTime({ hour: 0, min: 0, sec: 0, msec: 0 })
  };

  //stopwatcgh timer logic

  let updateHour = time.hour,
    updateMin = time.min,
    updateSec = time.sec,
    updateMsec = time.msec;

  const run = () => {
    if (updateMin === 60) {
      updateHour++;
      updateMin = 0;
    }
    if (updateSec === 60) {
      updateMin++;
      updateSec = 0;
    }
    if (updateMsec === 100) {
      updateSec++;
      updateMsec = 0;
    }
    updateMsec++;
    return setTime({
      hour: updateHour,
      min: updateMin,
      sec: updateSec,
      msec: updateMsec,
    });
  };


   //maping laps
   let lapRecord = <p></p>;
   if (laps.length > 0) {
     lapRecord = laps.map((lap) => (
       <Laps
         key={lap.num}
         num={lap.num}
         hour={lap.hour}
         min={lap.min}
         sec={lap.sec}
         msec={lap.msec}
         addedLapTime={lap.addedLapTime}
       />
     ));
   }
 
  return (
    <React.Fragment>
      <Header />
      <StopWatchTimer time={time} />
      <div className="buttons">
        <StartButton
          start={start}
          startState={startState}
          stopState={stopState}
        />
        <StopButton 
          stop={stop} 
          startState={startState} 
          stopState={stopState} 
        />
        <LapButton 
          lap={lap} 
          startState={startState} 
          stopState={stopState} 
        />
        <ResetButton
          reset={reset}
          startState={startState}
          stopState={stopState}
        />
      </div>
      {lapRecord}
    </React.Fragment>
  );
}

export default App;
