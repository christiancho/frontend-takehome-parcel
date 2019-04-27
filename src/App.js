import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import LocalStorage from '../src/services/localStorage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { savedGems: [] };
  }

  componentDidMount() {
    const savedGems = LocalStorage.get('saved') || [];
    this.setState({ savedGems });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>
    );
  }
}

export default App;
