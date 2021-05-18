import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Prices from "../Screens/Prices";
import Exchanges from "../Screens/Exchanges";
import Coins from "../Screens/Coins";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" component={Coins} />
    </Router>
  );
};
