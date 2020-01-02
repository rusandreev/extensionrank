import React from 'react';
import styled from 'styled-components';

// import { Container } from '../App';

function Sidebar() {
  return (
    <Wrapper>

        Chrome
        Firefox
        Categories
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div`
    min-width: 300px;
`;