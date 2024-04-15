import React from 'react';
import './androidLarge1.css';
import cellularConnectionIcon from '../assets/vectors/cellularConnection6_x2.svg';
import wifiIcon from '../assets/vectors/wifi3_x2.svg';
import batteryIcon from '../assets/vectors/battery1_x2.svg';
import group1Icon from '../assets/vectors/group1_x2.svg';

function AndroidLarge1() {
  return (
    <div className="android-large-1">
      <div className="skip">Skip</div>
      <div className="image-13"></div>
      <div className="track-your-goal">Track Your Goal</div>
      <div className="goals-reminder">
        Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals
      </div>
      <img className="group-1" src={group1Icon} alt="Group 1 Icon" />
    </div>
  );
}

export default AndroidLarge1;
