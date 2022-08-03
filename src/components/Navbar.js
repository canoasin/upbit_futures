import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="nav">
      <div className="inner">
        <div
          className="nav-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <span>Canoa Finance</span>
        </div>
        <ul className="nav-items">
          {/* <li className="item">
            <div className="item__name">BTC</div>
            <div className="item__contents">
              <ul>
                <li>BTC Futures</li>
                <li>NASDAQ Futures</li>
                <li>KOSPI Futures</li>
                <li>KOSDAQ Futures</li>
              </ul>
            </div>
          </li> */}
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/trade");
              }}
            >
              Trade
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              Board
            </a>
          </li>
        </ul>
        <div className="nav-btn">
          <button className="login">Login</button>
          <button className="sign">Sign</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
