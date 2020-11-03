import React from "react";
import "./MajorClock.less";
import padStart from "lodash/padStart";

const MajorClock = ({ milliSeconds = 0 }) => {
  return (
    <div className="major-wrapper">
      <span className="time-wrapper">{msToTime(milliSeconds).minutes}</span>
      <div className="split-bar">:</div>
      <span className="time-wrapper">{msToTime(milliSeconds).seconds}</span>
      <div className="split-bar">.</div>
      <span className="time-wrapper">{msToTime(milliSeconds).ms}</span>
    </div>
  );
};

const msToTime = (milliSeconds) => {
  let time = milliSeconds;
  let ms = milliSeconds % 1000;
  time = (milliSeconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  ms = Math.round((milliSeconds % 1000) / 10);

  return {
    ms: padStart(ms, 2, "0"),
    seconds: padStart(seconds, 2, "0"),
    minutes: padStart(minutes, 2, "0"),
  };
};

export default MajorClock;
