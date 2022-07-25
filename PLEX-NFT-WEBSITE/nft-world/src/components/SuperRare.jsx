import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function SuperRare(){
  const data = [
    {
      image: super1,
      series: "plex nft",
      title: "SQuid games",
      price: 5.99,
      tag: 11111,
      time: 1,
    },
    {
      image: super2,
      series: "plex nft",
      title: "Beige",
      price: 5.99,
      tag: 22222,
      time: 2,
    },
    {
      image: super3,
      series: "plex nft",
      title: "SQuid games",
      price: 5.99,
      tag: 33333,
      time: 3,
    },
    {
      image: super4,
      series: "plex nft",
      title: "Player",
      price: 5.99,
      tag: 44444,
      time: 4,
    },
  ];
  return (
    <div className="super_rare">
      <div className="title_container">
        <h2 className="title">Extra Rare selection from collection</h2>
        <p className="description">
          These are our top 4 selection that are highly bid on via <a href="#">section</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}