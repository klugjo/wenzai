import React from 'react';
import { Input, Button, Typography, Form, Checkbox } from 'antd';
import { ReactComponent as LogoSvg } from '../../../assets/svg/logo-abbreviated.svg';
import { signInRequested } from '../authReducer';
import { useDispatch } from 'react-redux';

import styles from './SignIn.module.css';

const { Title } = Typography;

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const onFinish = ({ email, password }: any) => {
    dispatch(signInRequested({ email, password }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      <div className={styles.right}>
        <div className={styles.panel}>
          <Title>HAVE AN ACCOUNT ?</Title>
          <br />
          <Form
            name="basic"
            layout="vertical"
            hideRequiredMark={true}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Your email goes here"
              name="email"
              rules={[{ required: true, message: 'Please input your email' }]}
            >
              <Input /> 
            </Form.Item>

            <Form.Item
              label="Your password goes there"
              name="password"
              rules={[{ required: true, message: 'Please input your password' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>I want to stay logged in</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Let's go !
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
