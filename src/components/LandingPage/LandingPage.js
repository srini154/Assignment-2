import React, { useState } from "react";
// import App from "../../Register";
import Login from "../Login/Login";
import App from "../Register/Register";
import "./Landing.css";

const LandingPage = () => {
  const [view, setView] = useState("login");

  return (
    <div className="landingpg-parent-div">
      <div className="signup-parent-div">
        <button onClick={() => setView("login")} className="submit3">
          Login
        </button>
        <button onClick={() => setView("register")} className="submit3">
          Sign Up
        </button>
      </div>
      <hr></hr>
      <div className="landing-child-div">
        {view == "login" ? <Login /> : <App />}
      </div>
    </div>
  );
};

export default LandingPage;
