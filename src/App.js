import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import { BROWSERS, CATEGORIES } from './constants/common';
import Content from './components/Content';
import Home from './pages/Home';

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
          <Switch>
          <Route path="/:type">
            <Content />
          </Route>
          <Route path="/:type">
            <Content />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
            
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
