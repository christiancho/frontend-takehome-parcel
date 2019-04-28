import React from 'react';
import styled from 'styled-components';
import { space, fontFamily, fontWeight } from 'styled-system';

const MenuItem = ({ label, isActive, onClick }) => (
  <StyledItem
    isActive={isActive}
    py="md"
    fontFamily="sansSerif"
    fontWeight="bold"
    mb="lg"
    onClick={onClick}
  >
    {label}
  </StyledItem>
);

export default MenuItem;

const StyledItem = styled.li`
  ${space}
  ${fontFamily}
  ${fontWeight}
  position: relative;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FF3B3F;
    height: ${({ isActive }) => isActive ? '4px' : '0' };
    transition: 100ms;
  }

  :not(:first-of-type) {
    margin-left: 16px;
  }

  :hover {
    :before {
      height: 4px;
    }
  }
`;
