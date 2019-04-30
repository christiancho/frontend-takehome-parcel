import React from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  space,
  borderRadius,
  fontFamily,
  fontSize,
  fontWeight,
  width,
} from 'styled-system';

const Button = ({
  onClick,
  isDisabled,
  children,
}) => (
  <StyledButton
    backgroundColor="sky"
    fontFamily="sansSerif"
    fontSize="sm"
    borderRadius="default"
    border="0"
    p="sm"
    width="100%"
    color="black"
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled.button`
  ${color}
  ${fontFamily}
  ${fontWeight}
  ${fontSize}
  ${width}
  ${space}
  ${borderRadius}
  ${border}
  outline: 0;
  cursor: pointer;
  appearance: none;
`;
