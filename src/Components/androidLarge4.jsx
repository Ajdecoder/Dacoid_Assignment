import React from "react";
import "./androidLarge4.css";
import googleIcon from "../assets/vectors/flatColorIconsgoogle1_x2.svg";
import vectorIcon from "../assets/vectors/vector12_x2.svg";

function AndroidLarge4() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="android-large-4">
      <div className="create-an-account">Create an account</div>
      <form onSubmit={handleSubmit}>
        <div className="container-8">
          <input type="text" className="first-name" placeholder="First Name" />
        </div>
        <div className="container-3">
          <input type="text" className="last-name" placeholder="Last Name" />
        </div>
        <div className="container-7">
          <input type="email" className="email" placeholder="Email" />
        </div>
        <div className="container-9">
          <input type="password" className="password" placeholder="Password" />
        </div>
        <div className="container-1">
        <label htmlFor="termsAndConditions" className="group-759132">
            <input
              type="checkbox"
              id="termsAndConditions"
              className="rectangle-2128"
            />
            By proceeding, I agree to all{" "}
            <a href="/terms" className="terms-link">
              T&C
            </a>{" "}
            and{" "}
            <a href="/privacy" className="privacy-link">
              Privacy Policy
            </a>
          </label>
        </div>
        <div className="container-4">
          <div type="submit" className="create-an-account-1">
            Create an Account
          </div>
        </div>
      </form>
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
      <p className="acc-already">
        <span className="acc-already">Already have an account? <a>Login</a> </span>
      </p>
    </div>
  );
}

export default AndroidLarge4;
