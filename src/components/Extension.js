import React from 'react';
import styled from 'styled-components';

import { BROWSERS, SHOPS } from '../constants/common';
import {timeSince } from '../utils';

function Extension(props) {
  const { name, url, image, lastUpdated, interactionCount, ratingValue, ratingCount, platform, index } = props;
  const intalls = isNaN(interactionCount) ? parseInt(interactionCount.replace(/,/g, '')) : interactionCount;
  const ratings = isNaN(ratingCount) ? parseInt(ratingCount.replace(/,/g, '')) : ratingCount;
  const onExtensionClick = (name) => {
    if( window && window.gtag) {
      window.gtag('event', 'Extension.Link', {
        event_category: 'Extension',
        event_label: platform + '/' + name
      });
    }
  } 

  return (
    <ExtensionWrapper>
      <LeftColumn>
        <Place>{index + 1}.</Place>
        <Image src={image} />
        <NameWrapper>
          <Name href={url} target="_blank" rel="noopener noreferrer" onClick={() => onExtensionClick(name)}>
            {name}
          </Name>
          {/* {(category) && <Category>
            {category}
          </Category>} */}
        </NameWrapper>
      </LeftColumn>
      <DataWrapper>
        {(platform !== BROWSERS.SAFARI && platform !== SHOPS.SHOPIFY) && <InteractionCount title="Users">
          <MobileTitle>Users:</MobileTitle>
           {platform === BROWSERS.CHROME ? (isNaN(intalls) ? '-' : (intalls.toLocaleString('ru-RU') + '+')) : 
            (isNaN(intalls) ? '-' : intalls.toLocaleString('ru-RU'))}
        </InteractionCount>}
        <RatingCount title="Reviews">
          <MobileTitle>Reviews:</MobileTitle>
          {isNaN(ratings) ? '-' : ratings.toLocaleString('ru-RU')}
        </RatingCount>
        <RatingValue>
          <MobileTitle>Stars:</MobileTitle>
          {isNaN(ratingValue) ? '-' : parseFloat(ratingValue).toPrecision(2)}
        </RatingValue>
        {platform !== SHOPS.SHOPIFY && <LastUpdated>
          {timeSince(lastUpdated) + ' ago'}
        </LastUpdated>}
      </DataWrapper>
    </ExtensionWrapper>
  );
}

export default Extension;

const Place = styled.span`
    display: inline-block;
    margin-right: 20px;
`;

const Image = styled.img`
  min-width: 32px;
  width: 32px;
  height: 100%;
  margin-right: 10px;
`;

const ExtensionWrapper = styled.div`
    width: 100%;
    padding: 6px 0px 7px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;

    @media(max-width: 980px) {
      flex-direction: column;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 980px) {
      width: 100%;
    }
`;

const Name = styled.a`
  color: #333;
  font-weight: 600;
`;

const Category = styled.div`
  font-size: 12px;
  text-transform: lowercase;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 980px) {
    width: 100%;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media(max-width: 980px) {
    width: 100%;
    margin: 0;
    flex-direction: column;
    alighn-items: flex-start;
  }

`;

const Data = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;

  @media(max-width: 980px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
    margin-left: 0;
  }
`;

const InteractionCount = styled(Data)`
  min-width: 128px;
  flex-direction: column;
  align-items: center;

  @media(max-width: 980px) {
    min-width: 100px;
  }
`;

const RatingCount = styled(Data)`
  min-width: 114px;
  margin-left: 15px;
`;

const RatingValue = styled(Data)`
  margin-left: 15px;
  min-width: 60px;
`;

const LastUpdated = styled(Data)`
  margin-left: 15px;
  min-width: 100px;
`;

const MobileTitle = styled.div`
    display: none;
    font-weight: bold;

    @media(max-width: 980px) {
      display: inline-block;
      margin-right: 5px;
    }
`;
