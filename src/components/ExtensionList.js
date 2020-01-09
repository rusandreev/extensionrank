import React, { useState } from 'react';
import styled from 'styled-components';

import cx from '../ch_ext.json';
import fx from '../fx_ext.json';
import Extension from './Extension';

function ExtensionList({ browser, category }) {
  const [count, setCount] = useState(100);
  let extensions = browser === 'chrome' ? cx : fx;
  if (category !== '') {
    extensions = extensions.filter(item => item.category === category);
  }
  return (
    <Wrapper>
      <ExtensionsWrapper>
        <ExtensionsHeader>
          <Users>
            Users
          </Users>
          <Reviews>
            Reviews
          </Reviews>
          <Stars>
            Stars
          </Stars>
        </ExtensionsHeader>
        {extensions.slice(0, count).map(ext => {
            return (
                <Extension {...ext} key={ext.url} browser={browser} />
            )
        })}
      </ExtensionsWrapper>
      {extensions.length > count && <ShowMoreButton onClick={() => setCount(count + 100)}>Show more</ShowMoreButton>}
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
  margin: 0 auto;
  text-align: center;
`;

const ExtensionsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 10px;
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
