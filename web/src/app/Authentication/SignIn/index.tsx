import React from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './styles.module.css';

const SignIn: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.field}>
          <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
        </div>
        <div className={styles.field}>
          <Input size="large" placeholder="Password" type="password" prefix={<LockOutlined />} />
        </div>
        <div className={styles.field}>
          <Button type="primary" size="large">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
