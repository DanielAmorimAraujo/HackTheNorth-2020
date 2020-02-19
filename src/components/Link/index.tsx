import React from 'react';

import styled from 'styled-components';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: underline;
  
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const Link = ({ href, children }: { href: string, children: string }) => {
  return <StyledLink href={href} target="_blank">{children}</StyledLink>
}

export default Link;
