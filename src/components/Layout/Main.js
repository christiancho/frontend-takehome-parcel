import React from 'react';
import styled from 'styled-components';
import { space, flex, width, color } from 'styled-system';

const Main = ({ children }) => (
  <StyledMain
    m={0}
    p={0}
    width="100%"
    backgroundColor="neutral"
    flex="1"
  >
    {children}
  </StyledMain>
)

export default Main;

const StyledMain = styled.main`
  ${space}
  ${flex}
  ${width}
  ${color}
`;
