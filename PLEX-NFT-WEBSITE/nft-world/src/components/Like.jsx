import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like(){
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">NFT in a different view</h2>
          <p className="description">
          NFT stands for non-fungible token. It's generally built using the same kind of programming as cryptocurrency, like Bitcoin or Ethereum, but that's where the similarity ends.
          </p>
          <p className="description">
          Physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">NFT in a different view</h2>
          <p className="description">
          NFT stands for non-fungible token. It's generally built using the same kind of programming as cryptocurrency, like Bitcoin or Ethereum, but that's where the similarity ends.
          </p>
          <p className="description">
          Physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another.
          </p>
        </div>
      </div>
    </div>
  );
}