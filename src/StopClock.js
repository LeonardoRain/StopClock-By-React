import React, { Component } from "react";
import "./StopClock.less";
import MajorClock from "./MajorClock";
import ControlButtons from "./ControlButtons";
import SplitTimes from "./SplitTimes";

class StopClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      startTime: null,
      currentTime: null,
      diffTime: null,
      splits: [],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="top-wrapper">秒表</div>
        <MajorClock milliSeconds={this.state.diffTime} />
        <ControlButtons
          acitvated={this.state.isStarted}
          onStart={this.onStart}
          onPause={this.onPause}
          onSplit={this.onSplit}
          onReset={this.onReset}
        />
        <SplitTimes splits={this.state.splits} />
      </div>
    );
  }

  onStart = () => {
    if (this.state.diffTime) {
      this.setState({
        isStarted: true,
        startTime: new Date() - this.state.diffTime,
        currentTime: new Date(),
      });
    } else {
      this.setState({
        isStarted: true,
        startTime: new Date(),
        currentTime: new Date(),
      });
    }

    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date(),
        diffTime: this.state.currentTime - this.state.startTime,
      });
    }, 1000 / 100);
  };

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false,
    });
  };

  onSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.diffTime],
    });
  };

  onReset = () => {
    this.setState({
      isStarted: false,
      startTime: null,
      currentTime: null,
      diffTime: null,
      splits: [],
    });
  };
}

export default StopClock;
