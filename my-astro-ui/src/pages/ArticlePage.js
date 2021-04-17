import { React, useState, useEffect } from "react";
import articleContent from "./article-contents";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "./NotFoundPage";

function ArticlePage({ match }) {
  const name = match.params.name;
  console.log(`match = ${JSON.stringify(match)}`);

  const [articleInfo, setArticleInfo] = useState({ upVotes: 0, comment: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  if (!article) return <NotFoundPage />;
  return (
    <>
      <h1> {article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles: </h3>
      <ArticleList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
