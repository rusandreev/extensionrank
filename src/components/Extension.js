import React from 'react';
import styled from 'styled-components';


function Extension(props) {
    const { name, url, image, category, interactionCount, ratingValue, ratingCount, description } = props;
  return (
    <ExtensionWrapper>
      <Image src={image} />
        <NameWrapper>
          <Name>
            {name}
          </Name>
          <Category>
            Category: {category}
          </Category>
        </NameWrapper>
        <DataWrapper>
          <InteractionCount>
            Users: {interactionCount}
          </InteractionCount>
          <RatingCount>
            Reviews: {ratingCount}
          </RatingCount>
          <RatingValue>
            Rated: {parseFloat(ratingValue).toPrecision(3)}
          </RatingValue>
        </DataWrapper>
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
    padding: 10px;
    margin-bottom: 12px;
    border: 1px solid coral;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Category = styled.div`
  font-size: 12px;
  color: #333;
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
  font-size: 15px;
  color: #333;
`;

const RatingCount = styled.div`
  font-size: 15px;
  margin-left: 15px;
`;
const RatingValue = styled.div`
  font-size: 15px;
  margin-left: 15px;
`;
