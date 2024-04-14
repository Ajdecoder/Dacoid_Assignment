import React from 'react';
import './androidLarge1.css';
import cellularConnectionIcon from '../assets/vectors/cellularConnection6_x2.svg';
import wifiIcon from '../assets/vectors/wifi3_x2.svg';
import batteryIcon from '../assets/vectors/battery1_x2.svg';
import group1Icon from '../assets/vectors/group1_x2.svg';
import vector1Icon from '../assets/vectors/vector17_x2.svg';
import vector2Icon from '../assets/vectors/vector5_x2.svg';
import vector3Icon from '../assets/vectors/vector3_x2.svg';
import vector4Icon from '../assets/vectors/vector_x2.svg';

function AndroidLarge1() {
  return (
    <div className="android-large-1">
      <div className="status">
        <span className="time">9:41</span>
        <div className="status-bar">
          <img className="cellular-connection" src={cellularConnectionIcon} alt="Cellular Connection" />
          <img className="wifi" src={wifiIcon} alt="Wi-Fi" />
          <img className="battery" src={batteryIcon} alt="Battery" />
        </div>
      </div>
      <div className="skip">Skip</div>
      <div className="image-13"></div>
      <div className="track-your-goal">Track Your Goal</div>
      <div className="dont-worry-if-you-have-trouble-determining-your-goals-we-can-help-you-determine-your-goals-and-track-your-goals">
        Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals
      </div>
      <img className="group-1" src={group1Icon} alt="Group 1 Icon" />
    </div>
  );
}

export default AndroidLarge1;
