import React, { useState } from 'react';
import styled from 'styled-components';

import extensions from '../ch_ext.json';
import Extension from './Extension';

function ExtensionList() {
  const [count, setCount] = useState(100);
  return (
    <div>
      ExtensionList
      <ExtensionsWrapper>
        {extensions.slice(0, count).map(ext => {
            return (
                <Extension {...ext} key={ext.url} />
            )
        })}
      </ExtensionsWrapper>
      {extensions.length > count && <ShowMoreButton onClick={() => setCount(count + 100)}>Show more</ShowMoreButton>}
    </div>
  );
}

export default ExtensionList;

const ExtensionsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ShowMoreButton = styled.div`
  padding: 6px 20px 8px;
  border: 1px solid #333;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
`;
