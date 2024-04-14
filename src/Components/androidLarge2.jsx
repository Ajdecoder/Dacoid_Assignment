import React from 'react';
import './androidLarge2.css';
import cellularConnectionIcon from '../assets/vectors/cellularConnection1_x2.svg';
import wifiIcon from '../assets/vectors/wifi4_x2.svg';
import batteryIcon from '../assets/vectors/battery6_x2.svg';
import groupIcon from '../assets/vectors/group11_x2.svg';

function AndroidLarge2() {
  return (
    <div className="android-large-2">
      <div className="status">
        <span className="time">9:41</span>
        <div className="status-bar">
          <img className="cellular-connection" src={cellularConnectionIcon} alt="Cellular Connection" />
          <img className="wifi" src={wifiIcon} alt="Wi-Fi" />
          <img className="battery" src={batteryIcon} alt="Battery" />
        </div>
      </div>
      <div className="skip">Skip</div>
      <div className="image-16"></div>
      <div className="get-burn">Get Burn</div>
      <div className="lets-keep-burning-to-achieve-your-goals-it-hurts-only-temporarily-if-you-give-up-now-you-will-be-in-pain-forever">
        Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
      </div>
      <img className="group-1" src={groupIcon} alt="Group Icon" />
    </div>
  );
}

export default AndroidLarge2;
