import React from 'react';

import Image from 'react-bootstrap/Image';

import styled from 'styled-components';

const StyledImage = styled(Image)`
  width: 300px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

const AttendeeType = styled.h3`
  color: white;
  width: 300px;
  padding: 0px 10px;
  margin-top: -42px;
  line-height: 1.5;
  right: calc((100% - 300px) / 2);
  position: absolute;
  background: linear-gradient(90deg, rgba(255,255,255,0) 33%, rgba(5,5,5,0.9) 100%);
  text-align: right;
`;

const ProfileImage = ({ src, type }: { src: string, type: string }) => {
  return (
    <>
      <StyledImage src={src} />
      <AttendeeType>{type.toUpperCase()}</AttendeeType>
    </>
  );
}

export default ProfileImage;
