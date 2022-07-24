import React from "react";
import icon from "../assets/icon.png";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super4 from "../assets/super4.png";

export default function Free(){
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse otherpink"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon-image" />
          </div>
          <h2 className="title">Free NFT that can be viewed </h2>
          <p className="description">
            Sign up with us today to recieve new NFT on the market.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="plex Series"
            title="Squid man"
            price={5.99}
            tag={12334}
            time={10}
          />
        </div>
        <div className="card2">
          <Card
            image={super4}
            series="plex Series"
            title="Player 067"
            price={4.99}
            tag="9494"
            time={20}
          />
        </div>
      </div>
    </div>  
  );
}