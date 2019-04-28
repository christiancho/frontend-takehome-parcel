import React from 'react';
import styled from 'styled-components';

const Menu = ({ children }) => (
  <StyledMenu>
    {children}
  </StyledMenu>
);

export default Menu;

const StyledMenu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
