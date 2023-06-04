import React from "react";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header sectionPadding" id="home">
      <div className="headerContent">
        <h1 className="gradientText">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="headerContentInput">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="headerContentPeople">
          <img loading="lazy" src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="headerImage">
        <img loading="lazy" src={ai} alt="ai" />{" "}
      </div>
    </div>
  );
};

export default Header;
