import React, { useState } from "react";
import SingleCard from "./SingleCard";

function MainTable({coinData}) {

  const [flag, setflag] = useState(false);
  const [data,setdata]= useState({})
  const handelModal =(ele)=>{
    setflag(!flag);
    setdata(ele)
  }
console.log(data);

  return (
    <div>
      <div className= {`container ${flag ? "active" : ""}`} >
        <h1>hi</h1>
        <SingleCard {...data}/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Chnage</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coinData?.map((ele) => {
            return (
              <tr key={ele.id} onClick={()=>handelModal(ele)}>
                <td className="first-td">
                  <div className="crypto-img">
                    <img src={ele.image} alt="img" />
                  </div>
                  <div>
                    <h2>{ele.symbol}</h2>
                    <p>{ele.name}</p>
                  </div>
                </td>
                <td>
                  <p>{ele.current_price}</p>
                </td>
                <td>
                  <p>{ele.price_change_percentage_24h}</p>
                </td>
                <td>
                  <p>{ele.market_cap}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MainTable;
