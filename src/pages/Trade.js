import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Trade() {
  let [price, setPrice] = useState("");

  let coinPrice = useQuery(
    ["coinPrice"],
    () => {
      return axios
        .get("https://api.upbit.com/v1/ticker?markets=KRW-BTC")
        .then((res) => {
          return res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    } /* ,
    {
      refetchInterval: 1000,
    } */
  );

  return (
    <>
      <div className="trade-wrap">
        <AdvancedRealTimeChart
          symbol="BINANCE:BTCUSDT"
          theme="dark"
          timezone="Asia/Seoul"
        />
      </div>
      <div className="trade-contents">
        {coinPrice.isLoading && "로딩 중.."}
        {coinPrice.error && "error"}
        {coinPrice.data && coinPrice.data[0].trade_price}
      </div>
    </>
  );
}
