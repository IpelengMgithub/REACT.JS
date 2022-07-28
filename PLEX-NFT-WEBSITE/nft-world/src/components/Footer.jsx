import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";


export default function Footer(){
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFT",
      data: ["BTN", "Make", "Learn"],
    },
    {
      title: "Contact",
      data: ["Management", "Support"],
    },
    {
      title: "Social",
      data: ["Twitter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
  ];
  return (
    <footer>
      <div className="foot">
        <div className="brand_container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright plex-NFT</span>
      </div>
    </footer>
  );
}