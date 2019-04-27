import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>
    );
  }
}

export default App;
