import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  return (
    <Router>
      <BottomNav />
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
