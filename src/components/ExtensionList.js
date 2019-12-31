import React from 'react';

import extensions from '../rank.json';

function ExtensionList() {
  return (
    <div>
      ExtensionList
      {extensions.map(ext => {
        return (
            <div key={ext.name}>{ext.name}</div>
        )
      })}
    </div>
  );
}

export default ExtensionList;
