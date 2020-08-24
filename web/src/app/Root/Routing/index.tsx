import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from '../../../utils/routes';
import SignIn from '../../Authentication/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { appStarted } from '../rootReducer';
import { IMainState } from '../../../typings';
import Menu from '../Menu';

import styles from './styles.module.css';

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
      <Router>
        <div className={styles.root}>
          <div className={styles.content}>
            <Switch>
              <Route exact path={ROUTES.HOME} component={() => <div style={{ height: '150vh' }}>Home</div>} />
              <Route exact path={ROUTES.DECKS} component={() => <div>Decks</div>} />
              <Route exact path={ROUTES.PRACTICE} component={() => <div>Practice</div>} />
              <Route exact path={ROUTES.EXPLORE} component={() => <div>Explore</div>} />
              <Route exact path={ROUTES.SETTINGS} component={() => <div>Settings</div>} />
            </Switch>
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
        </div>
      </Router>
    );
  }
}

export default Routing;