import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";
import Google from "../../Assets/Icons/google.svg";
import Facebook from "../../Assets/Icons/facebook.svg";
import Apple from "../../Assets/Icons/apple.svg";
import WysaLogo from "../../Assets/Icons/WysaLogo.png";

import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="Auth">
      <div className="auth-logo">
        <img src={WysaLogo}></img>
        <Logo></Logo>
      </div>
      <div className="auth-method">
        <a
          className="auth-provider auth-method-google"
          href="https://wysaserver.onrender.com/auth/google"
        >
          <img src={Google}></img>
          <div>Sign up with Google</div>
        </a>
        <div className="auth-provider auth-method-facebook">
          <img src={Facebook}></img>
          <div>Sign up with Facebook</div>
        </div>
        <div className=" auth-provider auth-method-apple">
          <img src={Apple}></img>
          <div>Sign up with Apple</div>
        </div>

        <div style={{ color: "red" }}>
          *Facebook authentication and apple authentication is under
          developement
        </div>
      </div>
    </div>
  );
};

export default Auth;
