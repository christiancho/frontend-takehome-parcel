import React from 'react';
import styled from 'styled-components';
import { color, fontFamily, fontSize, space } from 'styled-system';

const H1 = styled.h1`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${space}
`;

const H2 = styled.h2`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${space}
`;

const H3 = styled.h3`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${space}
`;

const headingRef = {
  large: H1,
  medium: H2,
  small: H3,
};

const styleProps = {
  large: {
    fontSize: 'xxl',
  },
  medium: {
    fontSize: 'xl',
  },
  small: {
    fontSize: 'lg',
  },
};

const Heading = ({ children, size = 'medium', color = 'black' }) => {
  const Component = headingRef[size];
  return (
    <Component
      color={color}
      fontFamily="serif"
      {...styleProps[size]}
    >
      {children}
    </Component>
  );
};

export default Heading;
