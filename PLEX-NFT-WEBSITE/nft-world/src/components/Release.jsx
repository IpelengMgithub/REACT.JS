import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release(){
  return (
    <div className="releases">
      <div className="release pink">
        <div className="content">
          <h2 className="title">Release date to be confirmed</h2>
          <p className="description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">plexNft</a>
          </p>
          <p className="description">
            Only four will be released on this platform
          </p>
          <p className="description">lets start a movement</p>
          <a href="#" className="link">
            Check them<BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse purple"></div>
        </div>
      </div>
      <div className="release blue">
        <div className="card_container">
          <Card
            image={release2}
            series="plex Series"
            title="the office"
            price={5.99}
            tag="1111"
            time={5}
          />
          <div className="ellipse blue"></div>
        </div>
        <div className="content">
          <h2 className="title">Release date to be confirmed</h2>
          <p className="description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">plexNft</a>
          </p>
          <p className="description">
          Only four will be released on this platform.
          </p>
          <p className="description">be part of the movement</p>
          <a href="#" className="link">
            Check them here <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}