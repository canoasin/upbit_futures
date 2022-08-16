import Curprice from "../components/Context.js";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Trade() {
  return (
    <>
      <div className="mainB">
        <section className="ty01">
          <article>
            <span className="titB link">
              <a className="select">
                <em>
                  <img src="https://static.upbit.com/logos/ETH.png"></img>
                </em>
                <strong>이더리움</strong>
                <p>ETH/KRW</p>
              </a>
            </span>
            <div>
              <span className="marketB">
                <Curprice />
              </span>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
