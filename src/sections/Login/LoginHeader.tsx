import React from 'react';

import IconDark from 'images/icon-dark.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styled from 'styled-components';

const LoginImage = styled(Image)`
  margin: 10px;
  float: right;
  width: 32px;
`;

const LoginTitle = styled.div`
  text-align: left;
  font-size: 21px;
  margin-top: 8px;
`;

const LoginHeader = () => {
  return (
    <Row noGutters>
      <Col xs={3}>
        <LoginImage src={IconDark} />
      </Col>
      <Col>
        <LoginTitle>
          Attendee Information
        </LoginTitle>
      </Col>
    </Row>
  );
}

export default LoginHeader;
