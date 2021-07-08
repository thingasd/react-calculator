import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./components/page1"
import Page2 from "./components/page2"
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
