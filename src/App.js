import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import LeftDrawer from "./components/LeftDrawer";
import TopAppBar from "./components/TopAppBar";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    open&&setOpen(false);
  };

  return (
    <Box onKeyDown={handleDrawerClose} onClick={handleDrawerClose} height="100vh">
      <Router>
        <TopAppBar
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <LeftDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
        saf
      </Router>
    </Box>
  );
}

export default App;
