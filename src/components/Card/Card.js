import React from 'react';
import styled from 'styled-components';
import { space, color, borderRadius, border } from 'styled-system';

const Card = ({ children }) => (
  <StyledContainer
    backgroundColor="white"
    p="lg"
    borderRadius="default"
    border={0}
  >
    {children}
  </StyledContainer>
);

export default Card;

const StyledContainer = styled.div`
  ${color}
  ${space}
  ${border}
  ${borderRadius}
`;
