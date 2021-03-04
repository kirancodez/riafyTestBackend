import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Base from "../core/Base";
import { fetchInfo } from "./searchHelper/FetchInfoHelper";

const DetailPage = (props) => {
  const [values, setValues] = useState({
    results: [],
    error: "",
  });
  const loc = useLocation();

  useEffect(() => {
    if (loc.companyId) {
      fetchInfo({ id: loc.companyId }).then((data) => {
        if (data.error) {
          setValues({ ...values, results: [], error: "" });
        } else {
          setValues({ ...values, results: data });
        }
      });
    }
  }, []);

  return (
    <Base>
      <div className="row mb-5">
        <div className="container">
          <div className="col-md-12 bg-white py-4 px-5 tableContent">
          <a className="backbtn" onClick={()=>{props.history.push('/')}}><i class="fa fa-arrow-left" aria-hidden="true"></i></a> 
            <h1 className="mt-4 mb-1">{values.results.market_cap}</h1>  
            <div className="">
            <a className="website" target="blank" href={values.results.website} ><i className="fa fa-link pr-2" aria-hidden="true"></i> Website</a>
              <div  className="row mt-2 mb-5">
                <div className="col-md-7 content-sec">
                  <div className="row">
                  <div class="col-md-6">
                    <ul className="attributes striped-list">
                      <li className="striped-list">Current Market Price  <span className="float-right">{values.results.current_price}</span></li>
                      <li>ROCE <span className="float-right">{values.results.roce} %</span></li>
                      <li className="striped-list">Stock P/E <span className="float-right">{values.results.stock}</span></li>
                      <li>Reserves<span className="float-right">{values.results.reserves}</span></li>
                      <li className="striped-list">ROE<span className="float-right">{values.results.roe}</span></li>
                    </ul>
                  </div>
                  <div class="col-md-6 sec-div">
                    <ul className="attributes striped-list">
                      
                      <li>Dividend Yield<span className="float-right">{values.results.yeald}</span></li>
                      <li className="striped-list">Debt to equity<span className="float-right">{values.results.equity}</span></li>
                      <li>EPS<span className="float-right">{values.results.eps}</span></li>
                      <li className="striped-list">Dept<span className="float-right">{values.results.Debt}</span></li>
                    </ul>
                  </div>
                  </div>
                  
                </div>
                <div className="col-md-4 ml-5 abt-sec">
                  <h5>ABOUT</h5>
                  <p>{values.results.about}</p>
                  <h5>KEY POINTS</h5>
                  <p>{values.results.keypoint}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default DetailPage;
