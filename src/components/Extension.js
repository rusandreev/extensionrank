import React from 'react';
import styled from 'styled-components';


function Extension(props) {
    const { name, url, image, category, interactionCount, ratingValue, ratingCount, description } = props;
  return (
    <ExtensionWrapper>
       {name}
    </ExtensionWrapper>
  );
}

export default Extension;


const ExtensionWrapper = styled.div`
    width: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid coral;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
