import TickerView from "../components/TickerView.js";

export default function Main() {
  return (
    <>
      <TickerView />
      <div className="container">
        <div className="container-inner">
          <div className="contents-text">
            <h5 className="main-sign">Start earning today</h5>
            <button className="btn">Sign</button>
          </div>
        </div>
      </div>
    </>
  );
}
