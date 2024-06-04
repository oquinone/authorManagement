import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AuthorList from "./components/authorList";
import AddAuthorComponent from "./components/addAuthor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/#" exact>
            <AuthorList />
          </Route>
          <Route path="/add" exact>
            <AddAuthorComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
);
