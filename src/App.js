import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AuthorList from "./components/authorList";
import AddAuthorComponent from "./components/addAuthor";
// import ErrorPage from "./components/errorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AuthorList />
        </Route>
        <Route path="/add" exact>
          <AddAuthorComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
