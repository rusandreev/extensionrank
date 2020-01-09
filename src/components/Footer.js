import React from 'react';
import styled from 'styled-components';
import { Twitter } from 'react-feather';

import { Container } from '../App';

function Footer() {
  return (
    <FooterWrapper>
        <Container>
          © 2020 - Extension Rank - Made by 
            <TwitterUser>
            <Twitter color="#08a0e9" size={14} /><a href="https://twitter.com/rusandreev" target="_blank" rel="noopener noreferrer">rusandreev</a>
            </TwitterUser>
        </Container>
    </FooterWrapper>
  );
}

export default Footer;

const TwitterUser = styled.div`
  display: inline-block;

  svg {
    position: relative;
    top: 2px;
    display: inline-block;
    margin: 0 4px 0 10px;
  }
`;

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
