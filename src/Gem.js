import React from 'react';
import styled, { keyframes } from 'styled-components';

import Card from './components/Card';
import { Paragraph } from './components/Typography';
import Button from './components/Button';

class Gem extends React.Component {
  handleClick = () => {
    const { name, isSaved } = this.props;
    if (isSaved) {
      this.props.onUnsave(name);
    } else {
      this.props.onSave(name);
    }
  };

  render() {
    const { name, version, isSaved, onSave, onUnsave, index } = this.props;
    return (
      <AnimationWrapper delay={index * 25}>
        <Card>
          <Paragraph>
            <strong>{name}</strong>
            <br />
            <strong>v. </strong>{version}
          </Paragraph>
          <Button onClick={this.handleClick}>
            {isSaved ? 'Remove' : 'Save'}
          </Button>
        </Card>
      </AnimationWrapper>
    );
  }
}

export default Gem;

const Grow = keyframes`
  from {
    transform: scale(.75);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const AnimationWrapper = styled.div`
  animation-name: ${Grow};
  animation-duration: 250ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(.6,.39,.8,1.59);
  animation-delay: ${({ delay }) => `${delay}ms`};
`;
