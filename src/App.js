import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import ExtensionList from './components/ExtensionList';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import { BROWSERS, CATEGORIES } from './constants/common';

const MIN_COUNT = 100;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      browser: BROWSERS.CHROME,
      category: '',
      count: MIN_COUNT
    };

    this.onBrowserSelect = this.onBrowserSelect.bind(this);
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onShowMore = this.onShowMore.bind(this);
  }

  onBrowserSelect(browser) {
    this.setState({ browser });
    this.setState({ category: '' });
    this.setState({ count: MIN_COUNT });

    if( window && window.gtag) {
      window.gtag('event', 'Sidebar.Browser', {
        event_category: 'Sidebar',
        event_label: browser,
      });
    }
  }

  onCategorySelect(category) {
    this.setState({ category });
    this.setState({ count: MIN_COUNT });

    if( window && window.gtag) {
      window.gtag('event', 'Sidebar.Category', {
        event_category: 'Sidebar',
        event_label: category
      });
    }
  }

  onShowMore() {
    const { category, browser, count } = this.state;
    this.setState({ count: count + MIN_COUNT})

    if( window && window.gtag) {
      window.gtag('event', 'ExtensionList.ShowMore', {
        event_category: 'ExtensionList',
        event_label: category ? (browser + " - " + category) : browser,
        value: count + MIN_COUNT
      });
    }
  }

  render() {
    const { browser, category, count } = this.state;
    const categories = CATEGORIES[browser];

    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Container>
          <Hero />
          <Wrapper>
            <Sidebar onBrowserSelect={this.onBrowserSelect} onCategorySelect={this.onCategorySelect} category={category} browser={browser} categories={categories} />
            <ExtensionList browser={browser} category={category} count={count} onShowMore={this.onShowMore} />
          </Wrapper>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
`;

const Wrapper = styled.div`
  display: flex;

  @media(max-width: 980px) {
    flex-direction: column;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f6f7;
  }

  * {
    box-sizing: border-box;
  }
  
`;
