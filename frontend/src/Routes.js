import React from "react";
import {Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home"
import DetailPage from "./components/home/DetailPage"

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detailpage" exact component={DetailPage} />
        </Switch>
    </Router>
)

export default Routes;