import React from 'react';
import styled from 'styled-components';

import { Container } from '../App';

function Hero() {
  return (
        <HeroWrapper>
            Discover the best extensions for Google Chrome and Firefox browsers
            <div>The best extensions in ranked by users and reviews</div>
        </HeroWrapper>
  );
}

export default Hero;

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 120px;
    width: 100%;
    margin: 6px 0 30px;
    background: #fff;
    border-radius: 6px;
    font-size: 22px;

    div {
        margin-top: 8px;
        font-size: 16px;
    }
`;
