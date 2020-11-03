import React from "react";
import "./SplitItem.less";
import padStart from "lodash/padStart";

const SplitItem = ({ milliSeconds = 0, splitIndex = 0 }) => {
  return (
    <div className="item-wrapper">
      <span className="item-split-name">计次{splitIndex}</span>
      <div className="item-time-wrapper">
        <span className="time-cell">{msToTime(milliSeconds).minutes}</span>
        <div className="split-bar">:</div>
        <span className="time-cell">{msToTime(milliSeconds).seconds}</span>
        <div className="split-bar">.</div>
        <span className="time-cell">{msToTime(milliSeconds).ms}</span>
      </div>
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

  //   const hours = (time - minutes) / 60;

  return {
    ms: padStart(ms, 2, "0"),
    seconds: padStart(seconds, 2, "0"),
    minutes: padStart(minutes, 2, "0"),
  };
};

export default SplitItem;
