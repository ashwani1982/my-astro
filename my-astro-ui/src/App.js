import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./Navbar";

function App() {
  return (
    <Router>
      <div id="page-body">
        <NavBar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/article-list" component={ArticleListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
