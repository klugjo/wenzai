import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from '../../../utils/routes';
import SignIn from '../../Authentication/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { appStarted } from '../rootReducer';
import { IMainState } from '../../../typings';

import styles from './styles.module.css';
import Menu from '../Menu';

const Routing = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: IMainState) => state.currentUser);

  useEffect(() => {
    dispatch(appStarted());
  }, [dispatch]);

  if (currentUser === undefined) {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={() => <div>Landing Page</div>} />
          <Route exact path={ROUTES.SIGN_UP} component={() => <div>Sign Up</div>} />
          <Route exact path={ROUTES.SIGN_IN} component={() => <SignIn />} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <div className={styles.root}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.content}>
          <Router>
            <Switch>
              <Route exact path={ROUTES.HOME} component={() => <div style={{ height: '150vh' }}>Home</div>} />
              <Route exact path={ROUTES.DECKS} component={() => <div>Decks</div>} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default Routing;