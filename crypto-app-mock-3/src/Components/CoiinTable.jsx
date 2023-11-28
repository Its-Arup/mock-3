import React, { useEffect, useState } from "react";
import axios from "axios";
import MainTable from "./MainTable";

function CoiinTable() {
  const [coinData, setCoinData] = useState([]);
  const [totaldata, setTotaldata] = useState(100);
  const [page, setPage] = useState(1);
  const [totalBtn, setTotalBtn] = useState(Math.ceil(totaldata / 10));
  const [search, setsearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currency, setcurrency] = useState("");

  const handelSearch = (e) => {
    setsearch(e.target.value);
  };

  const handelsort = (e) => {
    setSortOrder(e.target.value);
  };
  const handelCurrnecy = (e) => {
    setcurrency(e.target.value);
  };
  const fetchData = (url, params) => {
    console.log(url)
    axios({
      method: "get",
      url: url,
      params: {params},
    })
      .then((res) => {
        console.log(res.data);
        setCoinData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let Base_url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
      currency || "INR"
    }&per_page=10&page=${page}`;

    // if(sortOrder != "" && currency != ""){
    //     Base_url = Base_url+`&order=${sortOrder}&currency=${currency}`
    // }else if(sortOrder != ""){
    //     Base_url = Base_url+`&order=${sortOrder}`
    // }else if(currency != ""){
    //     Base_url = Base_url+`&currency=${currency}`
    // }
    const params = {
      currency: currency,
      sortOrder: sortOrder,
    };
    fetchData(Base_url,params)
  }, [page, sortOrder, currency]);

  // &per_page=10&page=2

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search your Coin"
          onChange={handelSearch}
        />
      </div>

      <div className="sort-option-parent">
        <div>
          <select onChange={handelsort}>
            <option value="">Sort by Market cap</option>
            <option value="market_cap_asc">Low To High</option>
            <option value="market_cap_desc">High To Low</option>
          </select>
        </div>
        <div>
          <select onChange={handelCurrnecy}>
            <option value="">Change Currency</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>

      <MainTable coinData={coinData} />
      <div>
        {new Array(10).fill(0).map((_, i) => {
          return (
            <button onClick={() => setPage(i + 1)} key={i + 1}>
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CoiinTable;
