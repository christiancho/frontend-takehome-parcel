import React from 'react';
import styled from 'styled-components';
import { color, fontSize, fontFamily } from 'styled-system';

const Paragraph = ({ children }) => (
  <StyledParagraph
    color="black"
    fontSize="md"
    fontFamily="sansSerif"
  >
    {children}
  </StyledParagraph>
);

export default Paragraph;

const StyledParagraph = styled.p`
  ${color}
  ${fontSize}
  ${fontFamily}
`;
