import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { BROWSERS } from '../constants/common';

function Sidebar() {
  let { type } = useParams();
  console.log(type)

  const TYPES = BROWSERS;
  return (
    <Wrapper>
      <Browsers>
        <Title>Browsers</Title>
        
        {Object.keys(TYPES).map(key =>{
          return (
            <Button active={type === TYPES[key]} key={key}>
              {TYPES[key]}
            </Button>
          );
        })}
      </Browsers>
      {/* {categories && categories.length > 0 && (<Categories>
        <Title>Categories</Title>
        {categories.map(item => {
          return (
            <Button active={category === item} key={item}>{item}</Button>
          )
        })}
      </Categories>)} */}
    </Wrapper>
  );
}

export default Sidebar;

const Button = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 10px 12px;
  margin: 6px 0;
  background: ${props => props.active ? '#ebebeb' : '#fff'};
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: #ebebeb;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Categories = styled(Section)`
  @media(max-width: 980px) {
    display: none;
  }

  ${Button} {
    text-transform: lowercase;
  }
`;

const Title = styled.div``;

const Browsers = styled(Section)`
  @media(max-width: 980px) {
    display: flex;
    margin-bottom: 15px;
    
    ${Title} {
      display: none;
    }

    ${Button} {
      margin: 0 10px;
    }
  }
`;

const Wrapper = styled.div`
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`;