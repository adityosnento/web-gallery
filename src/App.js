import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import Gallery from "./components/containers/gallery";
import Recent from "./components/containers/recent";
import Search from "./components/containers/search";
import Tags from "./components/containers/tags";
import Author from "./components/containers/author-profile";
import SearchBar from "./components/presentations/search-bar";

const App = props => {
  return (
    <HashRouter>
      <div className="photo-flickr-app transition">
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={Recent} />
        <Route path="/gallery/:id" component={Gallery} />
        <Route path="/author/:id" component={Author} />
        <Route path="/search/:id" component={Search} />
        <Route path="/tags/:id" component={Tags} />
      </div>
    </HashRouter>
  );
};

export default App;
