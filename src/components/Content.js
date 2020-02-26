import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// import ExtensionList from './components/ExtensionList';
import Sidebar from './Sidebar';
import Hero from './Hero';


const Content = props => {
    let { type } = useParams();

    return (
        <div>
            <Hero />
            <Wrapper>
              {/* <Sidebar /> */}
              {/* <ExtensionList browser={browser} category={category} count={count} onShowMore={this.onShowMore} /> */}
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