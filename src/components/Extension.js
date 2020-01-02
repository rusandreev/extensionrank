import React, { useState } from 'react';
import styled from 'styled-components';

function Extension(props) {
    const { name, url, image, category, interactionCount, ratingValue, ratingCount, description } = props;
    const [hidden, setVisiblity] = useState(true);
  return (
    <ExtensionWrapper onClick={() => setVisiblity(!hidden)}>
      <Top>
        <Image src={image} />
        <NameWrapper>
          <Name>
            {name}
          </Name>
          <Category>
            {category}
          </Category>
        </NameWrapper>
        <DataWrapper>
          <InteractionCount title="Users">
            {interactionCount}
          </InteractionCount>
          <RatingCount title="Reviews">
            {ratingCount}
          </RatingCount>
          <RatingValue>
            {parseFloat(ratingValue).toPrecision(2)}
          </RatingValue>
        </DataWrapper>
      </Top>
      {!hidden && <Bottom>
        {description.replace(/&quot;/g, '"')}
        <a href={url} target="_blank" rel="noopener noreferrer">webstore</a>
      </Bottom>}
    </ExtensionWrapper>
  );
}

export default Extension;

const Image = styled.img`
  width: 32px;
  margin-right: 6px;
`;

const ExtensionWrapper = styled.div`
    width: 100%;
    padding: 6px 0px 7px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: #333;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const Bottom = styled.div`
    display: flex;
    margin-top: 10px;
    padding-top: 5px;
    border-top: 1px solid #ccc;

    a {
      display: inline-block;
      margin-left: auto;
      padding-left: 20px;
      color: #333;
    }
`;

const Name = styled.div`
  font-weight: 600;
`;

const Category = styled.div`
  font-size: 12px;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const InteractionCount = styled.div`
  min-width: 128px;
  font-size: 15px;
  display: flex;
  justify-content: center;
`;

const RatingCount = styled.div`
  min-width: 114px;
  font-size: 15px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
`;

const RatingValue = styled.div`
  font-size: 15px;
  margin-left: 15px;
  min-width: 60px;
  display: flex;
  justify-content: center;
`;
