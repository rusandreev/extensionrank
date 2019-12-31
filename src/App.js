import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import ExtensionList from './components/ExtensionList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <ExtensionList />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

export const Container = styled.div`
    max-width: 1280px;
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
  }
  
`;
