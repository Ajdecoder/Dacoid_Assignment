import React from 'react';
import './androidLarge8.css';
import cellularConnectionIcon from '../assets/vectors/cellularConnection5_x2.svg';
import wifiIcon from '../assets/vectors/wifi_x2.svg';
import batteryIcon from '../assets/vectors/battery_x2.svg';
import vector16Icon from '../assets/vectors/vector16_x2.svg';
import unionIcon from '../assets/vectors/union_x2.svg';
import union1Icon from '../assets/vectors/union1_x2.svg';
import backLinesIcon from '../assets/vectors/backLines_x2.svg';
import alertTriangleIcon from '../assets/vectors/alertTriangle_x2.svg';
import vector9Icon from '../assets/vectors/vector9_x2.svg';
import groupIcon from '../assets/vectors/group_x2.svg';
import vector14Icon from '../assets/vectors/vector14_x2.svg';
import vector2Icon from '../assets/vectors/vector2_x2.svg';
import vector18Icon from '../assets/vectors/vector18_x2.svg';
import vector6Icon from '../assets/vectors/vector6_x2.svg';

function AndroidLarge8() {
  return (
    <div className="android-large-8">
      <div className="android-large-81">
        <div className="container-5">
          <div className="chevron-left">
            <img className="vector" src={vector16Icon} alt="Vector" />
          </div>
          <span className="workout-tracker">Workout Tracker</span>
        </div>
        <div className="container-12">
          <span className="good-job">Good job</span>
          <span className="less-then-320-cal">less then 320cal</span>
        </div>
        <div className="container-8">
          <img className="union-1" src={unionIcon} alt="Union Icon" />
          <img className="union" src={union1Icon} alt="Union Icon" />
        </div>
        <div className="chart-full">
          <img className="back-lines" src={backLinesIcon} alt="Back Lines" />
          <div className="cal">900CAL</div>
          <div className="container-1">
            <span className="container">12:00</span>
            <span className="container-1">6:00</span>
            <span className="container-2">12:00</span>
            <span className="container-3">6:00</span>
          </div>
        </div>
        <div className="frame-17">
          <img className="alert-triangle" src={alertTriangleIcon} alt="Alert Triangle" />
          <span className="youve-burned-fewer-calories-than-yesterday-time-to-get-moving">
            You've burned fewer calories than yesterday. Time to get moving!
          </span>
        </div>
        <div className="container-13">
          <span className="upcoming-workout">Upcoming Workout</span>
          <div className="see-more">See more</div>
        </div>
        <div className="container-6">
          <div className="container-15">
            <div className="ellipse-53"></div>
            <div className="container-3">
              <div className="full-body-workout">Full Body Workout</div>
              <span className="today-3-pm">Today 3pm</span>
            </div>
          </div>
          <div className="toggle">
            <div className="ellipse-52"></div>
          </div>
        </div>
        <div className="container-11">
          <div className="container-7">
            <div className="ellipse-54"></div>
            <div className="container-16">
              <div className="upper-body-workout">Upper Body Workout</div>
              <span className="feb-330-pm">4 Feb, 3:30 pm</span>
            </div>
          </div>
          <div className="toggle-1">
            <div className="ellipse-521"></div>
          </div>
        </div>
        <div className="what-do-you-want-to-train">What Do You Want to Train</div>
        <div className="container-4">
          <div className="container-14">
            <div className="full-body-workout-1">Full Body Workout</div>
            <div className="arms">Arms</div>
            <span className="chest">Chest</span>
          </div>
          <div className="ellipse-55"></div>
        <div className="group-1">
          <img className="vector-11" src={vector6Icon} alt="Vector" />
        </div>
        </div>
        <div className="container-9">
          <img className="vector-4" src={vector9Icon} alt="Vector" />
          <img className="vector-7" src={groupIcon} alt="Group" />
          <img className="vector-7" src={vector14Icon} alt="Vector" />
          <div className="group">
            <img className="vector-6" src={vector2Icon} alt="Vector" />
            <img className="vector-5" src={vector18Icon} alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AndroidLarge8;
