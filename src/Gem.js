import React from 'react';

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
    const { name, version, isSaved, onSave, onUnsave } = this.props;
    return (
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
    );
  }
}

export default Gem;
