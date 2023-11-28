import React from "react";

function SingleCard({img,name,market_cap_rank,symbol,price_change_24h,current_price,total_volume,low_24h,high_24h,ath}) {

    console.log(total_volume)
  return <div className="container">
    <div className="img-wrapper">
        <img src={img} alt="img" />
    </div>
    <div>
        <h1>{name}</h1>
        <h2>Market position : {market_cap_rank}</h2>
        <p>{symbol}</p>
        <h3>Current Price : {current_price}</h3>
        <p>Price Change 24 Hour {price_change_24h}</p>
        <p>Total Volume : {total_volume}</p>
        <p>Low 24 hour : {low_24h}</p>
        <p>High 24 Hour : {high_24h}</p>
        <p>All Time High : {ath}</p>
    </div>
  </div>;
}

export default SingleCard;
