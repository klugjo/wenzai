import React from 'react';

import styles from './styles.module.css';

const SignIn: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="uk-position-center">
        <form className="uk-form-horizontal uk-margin-large">
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input className="uk-input uk-form-large" type="text" placeholder="Your Email" />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input className="uk-input uk-form-large" type="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
