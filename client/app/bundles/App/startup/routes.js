import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from '../containers/HelloWorld';
import Sample from '../containers/Sample';
import SignIn from '../containers/pages/Users/SignIn';
import SignUp from '../containers/pages/Users/SignUp';
import PasswordNew from '../containers/pages/Users/Password/new';
import PasswordEdit from '../containers/pages/Users/Password/edit';


export default (
  <Switch>
    <Route exact path="/" component={HelloWorld} />

    <Route exact path="/hello_world" component={HelloWorld} />
    <Route exact path="/sample" component={Sample} />
    <Route exact path="/users/sign_in" component={SignIn} />
    <Route exact path="/users/sign_up" component={SignUp} />
    <Route exact path="/users/password/new" component={PasswordNew} />
    <Route exact path="/users/password" component={PasswordNew} />

    <Route exact path="/users/password/edit" component={PasswordEdit} />

  </Switch>
);

