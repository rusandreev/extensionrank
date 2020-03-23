import React from 'react';
import styled from 'styled-components';

import cx from '../ch_ext.json';
import fx from '../fx_ext.json';
import op from '../op_ext.json';
import sf from '../sf_ext.json';
import Extension from './Extension';
import { BROWSERS } from '../constants/common';

function ExtensionList({ browser, count, onShowMore }) {
  let extensions;
  
  if (browser === BROWSERS.CHROME) {
    extensions = cx;
  } else if (browser === BROWSERS.FIREFOX) {
    extensions = fx;
  } else if (browser === BROWSERS.OPERA) {
    extensions = op;
  } else if (browser === BROWSERS.SAFARI) {
    extensions = sf;
  }

  // if (category !== '') {
  //   extensions = extensions.filter(item => item.category === category);
  // }

  extensions.sort(function (a, b) {
    if (browser === BROWSERS.SAFARI) {
      return b.ratingCount - a.ratingCount;
    }
    return (b.interactionCount - a.interactionCount) + (b.ratingCount - a.ratingCount);
  });

  return (
    <Wrapper>
      <ExtensionsWrapper>
        <ExtensionsHeader>
          {browser !== BROWSERS.SAFARI && <Users>
            Users
          </Users>}
          <Reviews>
            Reviews
          </Reviews>
          <Stars>
            Stars
          </Stars>
          <LastUpdated>
            Last Updated
          </LastUpdated>
        </ExtensionsHeader>
        {extensions.slice(0, count).map(ext => {
            return (
                <Extension {...ext} key={ext.url} browser={browser} />
            )
        })}
      </ExtensionsWrapper>
      {extensions.length > count && <ShowMoreButton onClick={() => onShowMore()}>Show more</ShowMoreButton>}
    </Wrapper>
  );
}

export default ExtensionList;

const Wrapper = styled.div`
  width: 100%;
`;

const ExtensionsWrapper = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    padding: 8px 15px;
    width: 100%;
}
`;

const ShowMoreButton = styled.div`
  padding: 6px 20px 8px;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;
  margin: 15px  auto 0;
  text-align: center;
`;

const ExtensionsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 10px;

  @media(max-width: 980px) {
    display: none;
  }
  `;

const Item = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  align-items: center;

  svg {
    margin-right: 3px;
  }
`;

const Users = styled(Item)`
  width: 128px;
  
`;

const Reviews = styled(Item)`
  width: 114px;
`;

const Stars = styled(Item)`
  width: 60px;
`;

const LastUpdated = styled(Item)`
  width: 100px;
`;
