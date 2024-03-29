import React from 'react';
import styled from 'styled-components';

function Hero() {
  return (
        <HeroWrapper>
            Discover the best extensions for Google Chrome, Firefox, Opera and Safari browsers
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
    padding: 10px 0 0;

    @media(max-width: 980px) {
        font-size: 20px;
    }

    div {
        margin-top: 8px;
        padding-bottom: 20px;
        font-size: 16px;
    }
`;
