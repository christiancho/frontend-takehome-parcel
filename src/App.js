import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from './theme';

import LocalStorage from '../src/services/localStorage';
import Api from '../src/services/api';

import { Header, Main, Container, Grid } from './components/Layout';
import { Paragraph, Heading } from './components/Typography';
import Card from './components/Card';
import { MenuItem, Menu } from './components/Menu';
import { Text } from './components/Input';

class App extends React.Component {
  state = {
    searchResults: [],
    savedGems: [],
    page: 'SEARCH',
    query: '',
  };

  componentDidMount() {
    const savedGems = LocalStorage.get('saved') || [];
    this.setState({ savedGems });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.query !== prevState.query) {
      if (this.state.query.length < 2) {
        this.setState({ searchResults: [] });
      } else {
        Api.search(this.state.query).then(this.updateWithResults);
      }
    }
  }

  updateWithResults = searchResults => this.setState({ searchResults });

  renderGem = (gem, index) => {
    return (
      <Card key={index}>
        <Paragraph>{gem.name}</Paragraph>
      </Card>
    );
  };

  handleSectionChange = page => () => this.setState({ page });

  handleQueryChange = query => this.setState({ query });

  handleSaveGem = (name) => {

  };

  handleUnsaveGem = (name) => {

  };

  renderSearch() {
    const validationMessage = this.state.query.length < 3 ? 'Enter a valid search term with at least 3 characters.'
      : this.state.searchResults.length === 0 ? 'No search results.'
      : '';
    return (
      <>
        <Text
          placeholder="Search for a gem..."
          value={this.state.value}
          onChange={this.handleQueryChange}
        />
        {validationMessage && <Heading size="small">{validationMessage}</Heading>}
        {!validationMessage && <Grid>
          {this.state.searchResults.map(this.renderGem)}
        </Grid>}
      </>
    );
  }

  renderSaved() {
    return (
      <Grid>
        {this.state.savedGems.map(this.renderGem)}
      </Grid>
    )
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ApplicationWrapper>
          <Header>
            <Container mx="auto">
              <Heading size="large" color="neutral">Ruby Gem Searcher</Heading>
            </Container>
          </Header>
          <Main>
            <Container mx="auto" my="xxl">
              <Menu>
                <MenuItem
                  label="Search"
                  onClick={this.handleSectionChange('SEARCH')}
                  isActive={this.state.page === 'SEARCH'}
                />
                <MenuItem
                  label="Saved Gems"
                  onClick={this.handleSectionChange('SAVED')}
                  isActive={this.state.page === 'SAVED'}
                />
              </Menu>
              {this.state.page === 'SEARCH' && this.renderSearch()}
              {this.state.page === 'SAVED' && this.renderSaved()}
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
