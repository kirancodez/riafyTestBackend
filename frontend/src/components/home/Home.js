import React from "react";
import Base from "../core/Base";
import SearchBox from "./Searcbox";

const Test = () => (
  <Base>
    <div className="row">
      <div className="container">
        <div className="col-md-12">
          <div className="text-center sitename">
            <h1>Riafy Stockz</h1>
            <p className="">
              "Stock analysis and screening tool for investors in India."
            </p>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  </Base>
);

export default Test;
