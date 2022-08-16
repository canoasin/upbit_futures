import { useState, useEffect } from "react";

let socket;

export default function CurPrice() {
  let [price, setPrice] = useState(0);
  let [change, setChange] = useState(0);
  let [rate, setRate] = useState(0);
  let [updown, setUpdown] = useState(0);

  useEffect(() => {
    getMarket();
  }, []);

  function getMarket() {
    if (socket != undefined) {
      socket.close();
    }
    socket = new WebSocket("wss://api.upbit.com/websocket/v1");
    socket.binaryType = "arraybuffer";
    socket.onopen = function (e) {
      filterRequest(
        '[{"ticket":"upbit-futures"},{"type":"ticker","codes":["KRW-ETH"]}]'
      );
    };
    socket.onclose = function (e) {
      socket = undefined;
    };
    socket.onmessage = function (e) {
      let enc = new TextDecoder("utf-8");
      let arr = new Uint8Array(e.data);
      let str_d = enc.decode(arr);
      let d = JSON.parse(str_d);
      if (d.type == "ticker") {
        setPrice(d.trade_price);
        setChange(d.signed_change_price);
        setRate(d.signed_change_rate * 100);
        setUpdown(d.change.toLowerCase());
      }
    };
  }

  return (
    <>
      <div className={"ty01 " + updown}>
        <span className="first">
          <strong>{price.toLocaleString("ko-KR")}</strong>
          <em>KRW</em>
        </span>
        <span>
          <p className="tit">전일대비</p>
          <strong>{rate.toFixed(2)}%</strong>
          <strong className="upDown">{change.toLocaleString("ko-KR")}</strong>
        </span>
      </div>
    </>
  );
}

function filterRequest(filter) {
  if (socket == undefined) {
    alert("no connect exists");
    return;
  }
  socket.send(filter);
}
