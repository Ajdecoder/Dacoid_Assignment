import React from "react";
import "./androidLarge9.css";
import vector8Icon from "../assets/vectors/vector8_x2.svg";
import vector10Icon from "../assets/vectors/vector10_x2.svg";
import vector11Icon from "../assets/vectors/vector11_x2.svg";
import vector13Icon from "../assets/vectors/vector13_x2.svg";
import vector15Icon from "../assets/vectors/vector15_x2.svg";
import vector19Icon from "../assets/vectors/vector19_x2.svg";
import vector2Icon from "../assets/vectors/vector7_x2.svg";
import vector4Icon from "../assets/vectors/vector4_x2.svg";
import groupIcon from '../assets/vectors/group_x2.svg';

function AndroidLarge9() {
  return (
    <div className="android-large-9">
      <div className="container-1">
        <div className="chevron-left">
          <img className="vector-10" src={vector8Icon} alt="Vector" />
        </div>
        <span className="workout-schedule">Workout Schedule</span>
      </div>
      <div className="container-5">
        <img className="vector-8" src={vector11Icon} alt="Vector" />
        <span className="feb-2024">Feb 2024</span>
        <img className="vector-9" src={vector10Icon} alt="Vector" />
      </div>
      <div className="calendar">
        <div className="group-626504">
          <p className="sun-5">
            Sun <span className="sun-5-sub-35">5</span>
          </p>
        </div>
        <div className="group-626505">
          <p className="mon-6">
            Mon <span className="mon-6-sub-54">6</span>
          </p>
        </div>
        <div className="group-626506">
          <p className="tue-7">
            Tue <span className="tue-7-sub-35">7</span>
          </p>
        </div>
        <div className="group-626508">
          <p className="wed-8">
            Wed <span className="wed-8-sub-35">8</span>
          </p>
        </div>
        <div className="group-626507">
          <p className="thu-9">
            Thu <span className="thu-9-sub-38">9</span>
          </p>
        </div>
      </div>

      <div className="am">06:00 AM</div>
      <div className="line-3"></div>
      <div className="container-12">
        <div className="container-8">
          <div className="am-1">07:00 AM</div>
          <span className="am-2">08:00 AM</span>
        </div>
        <div className="container-6">
          <span className="ab-workout-730-am">Ab Workout, 7:30am</span>
        </div>
      </div>
      <div className="line-5"></div>
      <div className="container-3">
        <div className="am-3">09:00 AM</div>
        <div className="container-4">
          <span className="upperbody-workout-9-am">Upperbody Workout, 9am</span>
        </div>
      </div>
      <div className="am-4">10:00 AM</div>
      <div className="line-7"></div>
      <div className="am-5">11:00 AM</div>
      <div className="line-8"></div>
      <div className="am-6">12:00 AM</div>
      <div className="line-9"></div>
      <div className="am-7">01:00 AM</div>
      <div className="line-10"></div>
      <div className="container-10">
        <div className="am-8">02:00 AM</div>
        <div className="container-11">
          <span className="lowerbody-workout-3-pm">Lowerbody Workout, 3pm</span>
        </div>
      </div>
      <div className="line-11"></div>
      <div className="container-9">
        <div className="container-7">
          <div className="am-9">03:00 AM</div>
          <span className="am-10">04:00 AM</span>
        </div>
        <div className="group-6">
          <span className="container">+</span>
        </div>
      </div>
      <div className="line-13"></div>
      <div className="container">
        <div className="container-2">
          <img className="vector-1" src={vector13Icon} alt="Vector" />
          <img className="group" src={groupIcon} alt="Group" />
          <img className="vector-4" src={vector15Icon} alt="Vector" />
          <div className="group">
            <img className="vector-3" src={vector19Icon} alt="Vector" />
            <img className="vector-2" src={vector2Icon} alt="Vector" />
          </div>
        </div>
        <span className="am-11">05:00 AM</span>
        <div className="group-1">
          <img className="vector" src={vector4Icon} alt="Vector" />
        </div>
      </div>
      <div className="line-6"></div>
      <div className="line-15"></div>
      <div className="rectangle-4534"></div>
      <div className="ellipse-56"></div>
    </div>
  );
}

export default AndroidLarge9;
