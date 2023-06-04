import React from "react";
import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./imports";

const Brand = () => {
  const brandItem = [
    {
      src: google,
      alt: "google",
    },
    {
      src: atlassian,
      alt: "atlassian",
    },
    {
      src: dropbox,
      alt: "dropbox",
    },
    {
      src: shopify,
      alt: "shopify",
    },
    {
      src: slack,
      alt: "slack",
    },
  ];
  return (
    <div className="brand sectionPadding">
      {brandItem.map((item, index) => (
        <div>
          <img loading="lazy" key={index} src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default Brand;
