import React, { useState } from "react";
import feedBag from "../images/feedBag.png";
import sheepAndGoat from '../data/sheepAndGoat-data.json';

export default function SheepAndGoat() {
  const [image] = useState(feedBag);
  const feedCard = sheepAndGoat.map(sheepAndGoat => 
    <div class="card flex centered margin-15">
    <img
      src={image}
      class="card-img-top margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header">{sheepAndGoat.name}</h1>
      <p class="card-text">
        {sheepAndGoat.description}
      </p>
      <p class="bold card-text">Price per bag: {sheepAndGoat.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {sheepAndGoat.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {sheepAndGoat.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border bg-lightgray">
      {feedCard}
    </div>
}