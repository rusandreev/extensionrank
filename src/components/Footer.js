import React from 'react';
import styled from 'styled-components';

import { Container } from '../App';

function Footer() {
  return (
    <FooterWrapper>
        <Container>
          © 2020 - Extension Rank - Made by <a href="https://twitter.com/rusandreev" target="_blank" rel="noopener noreferrer">rusandreev</a>
        </Container>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 40px;
  background: #fff;
  padding: 20px 0;
  color: black;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
