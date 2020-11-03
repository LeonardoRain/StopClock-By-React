import React from "react";
import SplitItem from "./SplitItem";
import "./SplitTimes.less";

const SplitTimes = ({ splits = [] }) => {
  return (
    <div className="split-time-wrapper">
      <div className="inner-wrapper">
        {splits.map((time, index) => (
          <SplitItem
            key={index + time}
            milliSeconds={time}
            splitIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SplitTimes;
