import axios from "axios";

export default function Market() {
  try {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    ws.opopen = () => {
      ws.send('[{"ticket":"test"}, {"type":"ticker", "codes":["KRW-BTC"]}]');
    };
    ws.onmessage = async (e) => {
      const { data } = e;
      const text = await new Response(data).text();
      console.log(JSON.parse(text));
    };
    ws.onerror = (e) => {
      console.log("error");
    };
  } catch (e) {}
}
