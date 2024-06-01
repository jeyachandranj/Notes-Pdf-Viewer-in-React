import React from "react";
import batman from "../assets/batman.jpg";
import Cards from "./cards";

const CardBanner = () => {
  return (
    <div>
      <div className="getNotes">
        <h2>Get Notes Now</h2>
        <div className="notes-content">
          <div className="notes-img">
            <img src={batman} alt="Batman" />
          </div>
          <div className="ai-notes">
            <div className="ai-con">
              <h3>AIML Notes</h3>
              <p>Get all your Notes for AIML in one place</p>
            </div>
            <div className="cards">
              <Cards title="Deep Learning" link="/show/dl" />
              <Cards title="Web Technology" link="/show/wt" />
              <Cards title="Computer Orgenization" link="/show/co" />
              {/* <Cards title="Operating System" link="/show/ai" /> */}
              {/* <Cards title="DBMS" link="/show/neural-networks" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
