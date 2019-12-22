import React from "react";
import { Switch, Route } from "react-router";
import login from "../src/container/login";
import Dashboard from "../src/components/withoutLoging";
import Dashboard1 from "./container/dashboard1";
import Map from "./components/Map";

const Router = () => {
    console.log('env process in router',process.env)
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={login} />
      <Route path="/dashboard1" component={Dashboard1} />
      <Route path="/map" component={Map} />
    </Switch>
  );
};

export default Router;
