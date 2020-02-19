import React from 'react';

import Button from 'react-bootstrap/Button';

import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: rgb(55, 63, 87);
  color: rgb(239, 248, 250);
  -webkit-box-align: center;
  align-items: center;
  width: 200px;
  justify-content: space-around;
  font-size: 16px;
  border-radius: 50px;
  padding: 15px;
  border: none;
  margin-right: 5px;

  &:disabled {
    background-color: rgb(55, 63, 87);
    opacity: 0.5 !important;
  }

  &:hover {
    background-color: rgb(55, 63, 87);
    opacity: 0.8;
  }
`;

const CustomButton = ({ disabled, onClick, children }: { disabled?: boolean, onClick?: () => void, children: string }) => {
  return <StyledButton disabled={disabled} onClick={onClick}>{children}</StyledButton>;
}

export default CustomButton;
