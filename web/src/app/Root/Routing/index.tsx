import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from '../../../utils/routes';
import SignIn from '../../Authentication/SignIn';

const Routing = () => {
  return (
    <Router>
      <Route exact path={ROUTES.LANDING} component={() => <div>Landing Page</div>} />
      <Route exact path={ROUTES.SIGN_UP} component={() => <div>Sign Up</div>} />
      <Route exact path={ROUTES.SIGN_IN} component={() => <SignIn />} />
    </Router>
  );
}

export default Routing;