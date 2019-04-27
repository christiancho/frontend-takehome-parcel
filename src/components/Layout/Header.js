import React from 'react';
import styled from 'styled-components';
import { space, color, width } from 'styled-system';

const Header = ({ children }) => (
  <StyledHeader
    m={0}
    py="xl"
    width="100%"
    backgroundColor="watermelon"
  >
    {children}
  </StyledHeader>
)

export default Header;

const StyledHeader = styled.header`
  ${space}
  ${width}
  ${color}
`;
