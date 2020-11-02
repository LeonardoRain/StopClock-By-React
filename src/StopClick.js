import React, { Component } from "react";
import "./StopClick.less";
// import MajorClock from "./MajorClock";
// import ControlButtons from "./ControlButtons";
// import SplitTimes from "./SplitTimes";

class StopClock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <MajorClock />
        <ControlButtons />
        <SplitTimes />
      </div>
    );
  }
}

const MajorClock = (props) => {
  return <div>MajorClock</div>;
};
const ControlButtons = (props) => {
  return <div>ControlButtons</div>;
};
const SplitTimes = (props) => {
  return <div>SplitTimes</div>;
};

export default StopClock;
