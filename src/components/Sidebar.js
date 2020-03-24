import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import { BROWSERS, SHOPS } from '../constants/common';

function Sidebar() {
  let { platform } = useParams();

  let categories;
  let title;
  if (platform === BROWSERS.CHROME || platform === BROWSERS.FIREFOX || platform === BROWSERS.OPERA ||
    platform === BROWSERS.SAFARI) {
      categories = BROWSERS;
      title = 'Browsers';
    } else if (platform === SHOPS.SHOPIFY) {
      categories = SHOPS;
      title = 'Shops';
    }
  return (
    <Wrapper>
      <Browsers>
        <Title>{title}</Title>
        {Object.keys(categories).map(key =>{
          return (
            <Link to={categories[key]}  key={key}>
              <Button active={platform === categories[key]}>
                {categories[key]}
              </Button>
            </Link>
            
          );
        })}
      </Browsers>
      {/* {categories && categories.length > 0 && (<Categories>
        <Title>Categories</Title>
        {categories.map(item => {
          return (
            <Button active={platform === item} key={item}>{item}</Button>
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
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    background: #ebebeb;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

// const Categories = styled(Section)`
//   @media(max-width: 980px) {
//     display: none;
//   }

//   ${Button} {
//     text-transform: lowercase;
//   }
// `;

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

  a {
    text-decoration: none;
    color: #000;
  }
`;

const Wrapper = styled.div`
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`;