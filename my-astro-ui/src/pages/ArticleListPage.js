import React, { useEffect, useState } from "react";

import ArticleList from "../components/ArticleList";

function ArticleListPage() {
  const [articleContents, setArticleContents] = useState([
    {
      _id: "6069a85ef0d922f7867cb63f",
      name: "learn-node",
      upvotes: 3,
      comments: [
        { username: "ashwani jain", comment: "I like this article" },
        { username: "ashwani jain", comment: "I like this article" },
      ],
    },
    {
      _id: "6069a86ff0d922f7867cb642",
      name: "learn-react",
      upvotes: 12,
      comments: 3,
    },
    {
      _id: "6069a883f0d922f7867cb647",
      name: "my-thoughts-on-resume",
      upvotes: 0,
      comments: [],
    },
  ]);
  useEffect(() => {
    console.log(`Entry Article-List-Page useEffect block`);
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/articles`);
        const body = await JSON.parse(result);

        console.log(`hello body=${body}`);
        //const body = await result.json();
        //setArticleInfo(body);
        setArticleContents(body);
      } catch (error) {
        return <h1>Error found in ArticleListPage {error}</h1>;
      }
    };
    fetchData();
  });

  //const article = articleContent.find((article) => article.name === name);

  return (
    <>
      <h1> Articles</h1>
      <ArticleList articles={articleContents} />
    </>
  );
}

export default ArticleListPage;
