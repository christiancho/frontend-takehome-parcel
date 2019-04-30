import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from './theme';

import LocalStorage from '../src/services/localStorage';
import Api from '../src/services/api';

import debounce from './utils/debounce';
import { Header, Main, Container, Grid } from './components/Layout';
import { Paragraph, Heading } from './components/Typography';
import { MenuItem, Menu } from './components/Menu';
import { Text } from './components/Input';

import Gem from './Gem';

const getNameSet = (gems) => new Set(gems.map(g => g.name));

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedGems = LocalStorage.get('saved') || [];
    const savedGemsSet = getNameSet(savedGems);
    this.state = {
      searchResults: [],
      savedGems,
      savedGemsSet,
      page: 'SEARCH',
      query: '',
    };
  }

  fetchResults = debounce(() => {
    if (this.state.query.length < 3) return;
    Api.search(this.state.query).then((searchResults) => {
      this.setState({ searchResults })
    });
  }, 250);

  renderGem = (gem, index) => (
    <Gem
      name={gem.name}
      version={gem.version}
      isSaved={this.state.savedGemsSet.has(gem.name)}
      onSave={this.handleSaveGem}
      onUnsave={this.handleUnsaveGem}
      key={index}
    />
  );

  handleSectionChange = page => () => this.setState({ page });

  handleQueryChange = query => this.setState({ query }, this.fetchResults);

  handleSaveGem = (name) => {
    const gem = this.state.searchResults.find(gem => gem.name === name);
    const savedGem = { ...gem, isSaved: true };
    const savedGems = [...this.state.savedGems, savedGem];
    const savedGemsSet = getNameSet(savedGems);
    this.setState((prevState) => ({
      savedGems,
      savedGemsSet,
    }), this.updateLocalStorage);
  };

  handleUnsaveGem = (name) => {
    const index = this.state.savedGems.findIndex(gem => gem.name === name);
    const left = this.state.savedGems.slice(0, index);
    const right = this.state.savedGems.slice(index + 1);
    const savedGems = [...left, ...right];
    const savedGemsSet = getNameSet(savedGems);
    this.setState((prevState) => ({
      savedGems,
      savedGemsSet,
    }), this.updateLocalStorage);
  };

  updateLocalStorage = () => {
    LocalStorage.set('saved', this.state.savedGems);
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
