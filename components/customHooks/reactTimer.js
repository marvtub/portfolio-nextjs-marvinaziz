import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyTimer() {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
    <div className="">
      
      <div className="text-4xl text-gray-800  ">
        <span>{('0' + hours).slice(-2)}</span>:<span>{('0' + minutes).slice(-2)}</span>:<span>{('0' + seconds).slice(-2)}</span>
      </div>
      <div className="main-btns space-x-4 py-4">
      <button  disabled={false} className="bg-green-700 rounded-md text-white hover:bg-green-600 px-4 py-2" onClick={start}>{isRunning ? "Speichern" : "Start"}</button>
      <button className="bg-gray-700 rounded-md text-white hover:bg-gray-600 px-4 py-2" onClick={pause}>Pause</button>
      </div>
      <div className="reset-btn">
      <button onClick={reset}>Zurücksetzen</button>
      </div>
    </div>
  );
}

export default MyTimer