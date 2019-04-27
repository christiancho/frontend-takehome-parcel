import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from './theme';

import LocalStorage from '../src/services/localStorage';
import { Header, Main, Container } from './components/Layout';
import { Paragraph, Heading } from './components/Typography';

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
        <ApplicationWrapper>
          <Header>
            <Container mx="auto">
              <Heading size="large" color="neutral">Ruby Searcher</Heading>
            </Container>
          </Header>
          <Main>
            <Container mx="auto" my="xxl">
              <Paragraph>
                This is a paragraph
              </Paragraph>
            </Container>
          </Main>
        </ApplicationWrapper>
      </ThemeProvider>
    );
  }
}

export default App;

const ApplicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
