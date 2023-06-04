import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <div className="blogContainerArticle">
    <div className="blogContainerArticleImage">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="blogContainerArticleContent">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
