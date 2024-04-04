import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { ResourcesMenu, ExamMenu, AboutMenu, Home, Quiz, Profile, ExternalApi } from "./views";

import "./App.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/dev.cloud-heroes" exact component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/about" component={AboutMenu} />
            <Route path="/exam" component={ExamMenu} />
            <Route path="/resources" component={ResourcesMenu} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

