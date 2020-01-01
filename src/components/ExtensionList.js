import React from 'react';
import styled from 'styled-components';

import extensions from '../rank.json';
import Extension from './Extension';

function ExtensionList() {
  return (
    <div>
      ExtensionList
      <ExtensionsWrapper>
        {extensions.slice(0, 100).map(ext => {
            return (
                <Extension {...ext} key={ext.url} />
            )
        })}
      </ExtensionsWrapper>
    </div>
  );
}

export default ExtensionList;

const ExtensionsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
