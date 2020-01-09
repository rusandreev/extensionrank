import React from 'react';
import styled from 'styled-components';

function Extension(props) {
    const { name, url, image, category, interactionCount, ratingValue, ratingCount, description, browser } = props;
  return (
    <ExtensionWrapper>
      <Image src={image} />
      <NameWrapper>
        <Name>
          {name}
        </Name>
        {browser === 'chrome' && <Category>
          {category}
        </Category>}
      </NameWrapper>
      <DataWrapper>
        <InteractionCount title="Users">
          {interactionCount == '10 000 000' ? '10 000 000 +' : interactionCount}
        </InteractionCount>
        <RatingCount title="Reviews">
          {ratingCount}
        </RatingCount>
        <RatingValue>
          {parseFloat(ratingValue).toPrecision(2)}
        </RatingValue>
      </DataWrapper>
    </ExtensionWrapper>
  );
}

export default Extension;

const Image = styled.img`
  min-width: 32px;
  width: 32px;
  height: 100%;
  margin-right: 6px;
`;

const ExtensionWrapper = styled.div`
    width: 100%;
    padding: 6px 0px 7px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: #333;
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

const Data = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
`;

const InteractionCount = styled(Data)`
  min-width: 128px;
`;

const RatingCount = styled(Data)`
  min-width: 114px;
  margin-left: 15px;
`;

const RatingValue = styled(Data)`
  margin-left: 15px;
  min-width: 60px;
`;
