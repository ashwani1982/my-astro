import React from "react";
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  console.log(`Entry to ArticleList with articles = ${articles}`);
  if (articles.length > 0) {
    return (
      <>
        <ul>
          {articles.map((article, key) => (
            <Link
              className="article-list-item"
              key={key}
              to={`/article/${article.name}`}
            >
              <li>
                <h3>{article.name}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h1> can't retrieve article list from db</h1>
      </>
    );
  }
}
export default ArticleList;
