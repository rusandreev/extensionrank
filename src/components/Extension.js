import React from 'react';
import styled from 'styled-components';

function Extension(props) {
    const { name, url, image, category, interactionCount, ratingValue, ratingCount, description, week, browser } = props;
  return (
    <ExtensionWrapper>
      <LeftColumn>
        <Image src={image} />
        <NameWrapper>
          <Name>
            {name}
          </Name>
          {browser === 'chrome' && <Category>
            {category}
          </Category>}
        </NameWrapper>
      </LeftColumn>
      <DataWrapper>
        <InteractionCount title="Users">
          {interactionCount === '10 000 000' ? '10 000 000 +' : interactionCount.toLocaleString('ru-RU')}
          {week !== '#N/A' && <InteractionCountDiff positive={week >= 0}>7d: <span>{week.toLocaleString('ru-RU')}</span></InteractionCountDiff>}
        </InteractionCount>
        <RatingCount title="Reviews">
          {ratingCount.toLocaleString('ru-RU')}
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

    @media(max-width: 980px) {
      flex-direction: column;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    @media(max-width: 980px) {
      width: 100%;
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

const InteractionCountDiff = styled.div`
  font-size: 11px;

    span {
      color: ${props => props.positive ? 'green' : 'red'};
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
