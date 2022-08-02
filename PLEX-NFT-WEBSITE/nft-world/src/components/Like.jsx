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
          <h2 className="title">NFT to the world</h2>
          <p className="description">
          NFTs are changing our world by how we communicate with one another and transmit information. For consumers, it can be a great way to keep something very personal and special from your favorite content creators.
          </p>
          <p className="description">
          NFT Worlds, a blockchain metaverse project initially integrated on the popular sandbox game, Minecraft, revealed their plans following Minecraft's ban on blockchain technology.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">NFT is that future</h2>
          <p className="description">
          More people are already working on NFTs, blockchains, and cryptocurrencies than ever before, but it will become increasingly common. In 2021 alone, crypto job postings on Indeed surged by 118%.
          </p>
          <p className="description">
          At times criticised as an over-hyped digital status symbol for the crypto rich, NFTs are changing how art is bought and sold and giving digital artists the ability to monetise and authenticate their work. The technology could become more significant with the development of the metaverse and other Web3 spaces.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">NFT is changing the art world</h2>
          <p className="description">
          NFTs have allowed artists, particularly digital artists, to make money from their work by selling to the public. They can create (or mint) an NFT for an image they make and sell it on the market.
          </p>
          <p className="description">
          The NFT isn't necessarily the artwork itself, but it can function as a digital certificate of authenticity for the work. The NFT allows a creator to name a rightful owner of a file, giving them the rights to present, access or resell it. In the Digital Art space, this is beneficial technology.
          </p>
        </div>
      </div>
    </div>
  );
}