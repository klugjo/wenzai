import React from 'react';
import { Input, Button, Typography, Form, Checkbox } from 'antd';
import { ReactComponent as SelectionSvg } from '../../../assets/svg/selection.svg';
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
      <div className={styles.left}>
        <SelectionSvg />
      </div>
      <div className={styles.right}>
        <div className={styles.panel}>
          <Title>SIGN IN TO WENZΛI</Title>
          <br />
          <Form
            name="basic"
            layout="vertical"
            hideRequiredMark={true}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username' }]}
            >
              <Input /> 
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
