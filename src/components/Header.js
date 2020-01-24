import React from 'react';
import styled from 'styled-components';

import { Container } from '../App';
import logo from '../logo.png';

function Header() {
  return (
    <HeaderWrapper>
        <Container>
          <HeaderContainer>
          <LogoLink href="/">
            <img src={logo} alt="Logo" />
            <span>Extension Rank</span>
          </LogoLink>
          <a href="https://www.buymeacoffee.com/rusandreev" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.buymeacoffee.com/buttons/lato-red.png" 
              alt="Buy Me A Coffee" 
              style={{height: '51px', width: '217px', borderRadius: '3px'}} 
            />
          </a>
          </HeaderContainer>
        </Container>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(221, 221, 221, 0.5);
  padding: 10px 0;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  height: 100%;
`;

const LogoLink = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 21px;
    display: flex;
    align-items: center;

    img {
      width: 39px;
      padding-right: 8px;
    }

    @media(max-width: 980px) {
      span {
        display: none;
      }
    }
`;
