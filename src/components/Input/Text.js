import React from 'react';
import styled from 'styled-components';
import { space, borderRadius, fontFamily, fontWeight, fontSize } from 'styled-system';

class Input extends React.Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <Label
        fontSize="md"
        fontWeight="normal"
        fontFamily="sansSerif"
      >
        <StyledInput
          placeholder={this.props.placeholder}
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          borderRadius="default"
          fontSize="md"
          fontWeight="normal"
          fontFamily="sansSerif"
          p="sm"
          mb="sm"
        />
      </Label>
    );
  }
}

export default Input;

const Label = styled.label`
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
`;

const StyledInput = styled.input`
  ${space}
  ${borderRadius}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  appearance: none;
  outline: none;
  border: 1px solid #A9A9A9;
`;
