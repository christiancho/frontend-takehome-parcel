import React from 'react';
import styled from 'styled-components';
import { space, display, gridGap, gridTemplateColumns } from 'styled-system';

const Grid = ({ children, columns = 3, gap = "md" }) => (
  <StyledGrid
    gridGap={gap}
    gridTemplateColumns={Array(columns).fill('1fr').join(' ')}
    display="grid"
  >
    {children}
  </StyledGrid>
);

export default Grid;

const StyledGrid = styled.div`
  ${space}
  ${display}
  ${gridGap}
  ${gridTemplateColumns}
`;
