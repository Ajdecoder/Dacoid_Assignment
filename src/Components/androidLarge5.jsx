import React from 'react';
import './androidLarge5.css';
import eyeOffIcon from '../assets/vectors/eyeOff_x2.svg';
import googleIcon from '../assets/vectors/flatColorIconsgoogle_x2.svg';
import vectorIcon from '../assets/vectors/vector1_x2.svg';

function AndroidLarge5() {
  return (
    <div className="android-large-5">
      <div className="welcome-back">Welcome Back</div>
      <div className="container-4">
        <input type="text" className="email-input" placeholder="Email" />
      </div>
      <div className="container">
        <input type="password" className="password-input" placeholder="Password" />
        <img className="eye-off" src={eyeOffIcon} alt="Eye Off" />
      </div>
      <div className="forgot-your-password">Forgot your password?</div>
      <div className="container-1">
        <div className="sign-in">Sign In</div>
      </div>
      <div className="container-3">
        <div className="line-1"></div>
        <span className="or">Or</span>
        <div className="line-2"></div>
      </div>
      <div className="container-5">
        <div className="container-2">
          <img className="flat-color-icons-google" src={googleIcon} alt="Google Icon" />
        </div>
        <div className="container-6">
          <img className="vector-6" src={vectorIcon} alt="Vector Icon" />
        </div>
      </div>
      <p className="dont-have-an-account-yet-create-an-account">
        <span className="dont-have-an-account-yet-create-an-account-sub-24"></span><span></span>
      </p>
    </div>
  );
}

export default AndroidLarge5;
