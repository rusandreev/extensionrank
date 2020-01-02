import React from 'react';
import styled from 'styled-components';

import { Container } from '../App';
import logo from '../logo.png';

function Header() {
  return (
    <HeaderWrapper>
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
      
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(221, 221, 221, 0.5);
  padding: 10px 0;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  height: 100%;

  img {
    width: 39px;
  }
`;
