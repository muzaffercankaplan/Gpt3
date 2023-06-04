import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="featuresContainerFeature">
      <div className="featuresContainerFeatureTitle">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="featuresContainerFeatureText">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
