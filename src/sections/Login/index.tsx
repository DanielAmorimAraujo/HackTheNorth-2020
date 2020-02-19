import React, { useState } from 'react';

import LoginHeader from 'sections/Login/LoginHeader';
import Button from 'components/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styled from 'styled-components';

const LoginWrapper = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding: 15px;
  margin-top: 50px;
`;

const IncorrectCred = styled.div`
  color: red;
`;

const Login = ({ setLoggedIn }: { setLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const validEmail = 'email@gmail.com';
  const validPassword = 'passwordHTN';

  const validateLogin = () => {
    setLoggedIn(true);
    if (email === validEmail && password === validPassword) {
      setLoggedIn(true);
    } else {
      setPassword('');
      setIncorrect(true);
    }
  }

  return (
    <LoginWrapper>
      <LoginHeader />
      <Form>
        <Form.Group>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e: React.FormEvent<HTMLInputElement>) => { setEmail(e.currentTarget.value) }} />
        </Form.Group>

        <Form.Group>
          <InputGroup>
            <Form.Control type={visible ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e: React.FormEvent<HTMLInputElement>) => { setPassword(e.currentTarget.value) }} />
            <InputGroup.Append>
              <InputGroup.Text onClick={() => { setVisible(!visible) }}><i className={visible ? 'fa fa-eye' : 'fa fa-eye-slash'} /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Button onClick={validateLogin}>
          Submit
        </Button>
        {incorrect && <IncorrectCred>Incorrect Email/Password</IncorrectCred>}
      </Form>
    </LoginWrapper>
  );
}

export default Login;
