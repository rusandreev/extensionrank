import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ExtensionList from './ExtensionList';
import Sidebar from './Sidebar';
import Hero from './Hero';


const Content = ({ onShowMore, count }) => {
    let { platform } = useParams();

    return (
        <div>
            <Hero />
            <Wrapper>
              <Sidebar platform={platform} />
              <ExtensionList platform={platform} count={count} onShowMore={onShowMore} />
            </Wrapper>
        </div>
    );
};

export default Content;

const Wrapper = styled.div`
  display: flex;

  @media(max-width: 980px) {
    flex-direction: column;
  }
`;