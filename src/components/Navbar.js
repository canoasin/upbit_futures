import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="nav">
      <div className="inner">
        <h1 className="nav-logo">
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            ㅇㅇ
          </a>
        </h1>
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
              className="item__name active"
              onClick={() => {
                navigate("/trade");
              }}
            >
              거래소
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              입출금
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              투자내역
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              코인동향
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              스테이킹
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              NFT
            </a>
          </li>
          <li className="item">
            <a
              className="item__name"
              onClick={() => {
                navigate("/board");
              }}
            >
              고객센터
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
