import React from "react";
import superEth from "../assets/supereth.png";


export default function Card({ image, series, title, price, tag, time }){
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card_content">
        <div className="card_heading">
          <span className="card_series">{series}</span>
          <span className="card_top">Top result</span>
        </div>
        <div className="card_details">
          <h4 className="card_title">{title}</h4>
          <div className="card_price">
            <img src={superEth} alt="super ethereum" />
            <h4>{price} ETH</h4>
          </div>
        </div>
        <div className="card_sub_details">
          <span>#{tag}</span>
          <span>{time} days left</span>
        </div>
      </div>
    </div>
  );
}