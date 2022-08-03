import { Ticker } from "react-ts-tradingview-widgets";

function TickerView() {
  const symbols = [
    {
      proName: "BINANCE:BTCUSDT",
      title: "BTC/USDT",
    },
    {
      proName: "BINANCE:ETHUSDT",
      title: "ETHUSDT",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "NASDAQ 100",
    },
    {
      proName: "KRX:KOSPI",
      title: "KOSPI",
    },
    {
      proName: "KRX:KOSDAQ",
      title: "KOSDAQ",
    },
  ];
  return (
    <div className="single-ticker">
      <Ticker colorTheme="dark" symbols={symbols} />
    </div>
  );
}

export default TickerView;
