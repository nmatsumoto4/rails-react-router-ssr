import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from '../containers/HelloWorld';
import Sample from '../containers/Sample';
import SignIn from '../containers/pages/Users/SignIn';


export default (
  <Switch>
    <Route exact path="/hello_world" component={HelloWorld} />
    <Route exact path="/sample" component={Sample} />
    <Route exact path="/users/sign_in" component={SignIn} />

  </Switch>
);

