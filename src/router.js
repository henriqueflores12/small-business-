import React from 'react'
import { Switch, Route } from 'react-router'
import login from '../src/components/login'
import Dashboard from '../src/components/withoutLoging'
import Dashboard1 from './container/dashboard1'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={login} />
            <Route path="/dashboard1"component={Dashboard1}/>
            
        </Switch>
    );
};

export default Router;