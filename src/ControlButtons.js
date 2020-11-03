import React from "react";
import "./ControlButtons.less";

const ControlButtons = (props) => {
  const { acitvated, onStart, onPause, onSplit, onReset } = props;
  if (acitvated) {
    return (
      <div className="btns-wrapper">
        <div className="btn-1" onClick={onSplit}>
          计次
          <div className="inner-border"></div>
        </div>
        <div className="toggle-wrapper">
          <div className="toggle1"></div>
          <div className="toggle2"></div>
        </div>
        <div className="btn-3" onClick={onPause}>
          停止
          <div className="inner-border"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="btns-wrapper">
        <div className="btn-1" onClick={onReset}>
          复位
          <div className="inner-border"></div>
        </div>
        <div className="toggle-wrapper">
          <div className="toggle1"></div>
          <div className="toggle2"></div>
        </div>
        <div className="btn-2" onClick={onStart}>
          启动
          <div className="inner-border"></div>
        </div>
      </div>
    );
  }
};

// ControlButtons.propTypes = {
//   activated: PropTypes.bool,
//   onStart: PropTypes.func.isRequired,
//   onPause: PropTypes.func.isRequired,
//   onSplit: PropTypes.func.isRequired,
//   onReset: PropTypes.func.isRequired,
// };

export default ControlButtons;
