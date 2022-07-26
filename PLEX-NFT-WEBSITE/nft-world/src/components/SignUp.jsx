import React from "react";
import signup from "../assets/signup.png"

export default function SignUp(){
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <h1 className="title">Introducing Plex nft</h1>
          <p className="description">
            Explore the amazing world of PTM. Sign up below to
            recieve updates.
          </p>
          <button>Sign Up here</button>
        </div>
        <div className="image_container">
          <div className="image">
            <img src={signup} alt="sign up section" />
          </div>
          <div className="ellipse_container">
            <div className="ellipse blue"></div>
            <div className="ellipse purple"></div>
          </div>
        </div>
      </div>
    </div>
  );
}