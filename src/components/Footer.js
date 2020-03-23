import React from 'react';
import styled from 'styled-components';
import { Twitter } from 'react-feather';

import { Container } from '../App';

function Footer() {
  return (
    <FooterWrapper>
        <Container>
        <FooterContainer>
          <div>
            © 2020 - Extension Rank. Made by 
            <TwitterUser>
            <Twitter color="#08a0e9" size={14} /><a href="https://twitter.com/rusandreev" target="_blank" rel="noopener noreferrer">rusandreev</a>
            </TwitterUser>
          </div>
          
            {/* <a href="https://www.producthunt.com/posts/extension-rank?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-extension-rank" target="_blank" rel="noopener noreferrer">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=180418&theme=light" 
                alt="Extension Rank - Discover extensions for Chrome, Firefox and  Opera browsers | Product Hunt Embed" 
                style={{width: '250px', height: '54px'}} />
            </a> */}
          </FooterContainer>
            
        </Container>
    </FooterWrapper>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 980px) {
    flex-direction: column;
  }
`;

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

  @media(max-width: 980px) {
    a {
      margin-top: 15px;
    }
  }
`;
