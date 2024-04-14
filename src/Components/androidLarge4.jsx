import React from "react";
import "./androidLarge4.css"; // Import CSS file if needed
import cellularConnectionIcon from "../assets/vectors/cellularConnection3_x2.svg";
import wifiIcon from "../assets/vectors/wifi1_x2.svg";
import batteryIcon from "../assets/vectors/battery5_x2.svg";
import googleIcon from "../assets/vectors/flatColorIconsgoogle1_x2.svg";
import vectorIcon from "../assets/vectors/vector12_x2.svg";

function AndroidLarge4() {
  return (
    <div className="android-large-4">
      <div className="create-an-account">Create an account</div>
      <div className="container-8">
        <span className="first-name">First Name</span>
      </div>
      <div className="container-3">
        <span className="last-name">Last Name</span>
      </div>
      <div className="container-7">
        <span className="email">Email</span>
      </div>
      <div className="container-9">
        <span className="password">Password</span>
      </div>
      <div className="container-1">
        <div className="group-759132">
          <div className="rectangle-2128"></div>
          By proceeding, I agree to all <span>T&C</span> and{" "}
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="container-4">
        <span className="create-an-account-1">Create an Account</span>
      </div>
      <div className="container-6">
        <div className="line-1"></div>
        <span className="or">Or</span>
        <div className="line-2"></div>
      </div>
      <div className="container-5">
        <div className="container-2">
          <img
            className="flat-color-icons-google"
            src={googleIcon}
            alt="Google Icon"
          />
        </div>
        <div className="container">
          <img className="vector-4" src={vectorIcon} alt="Vector Icon" />
        </div>
      </div>
      <p className="already-have-an-account-login">
        <span className="already-have-an-account-login-sub-28">fdfd</span>
      </p>
    </div>
  );
}

export default AndroidLarge4;
