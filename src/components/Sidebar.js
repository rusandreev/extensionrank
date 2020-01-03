import React from 'react';
import styled from 'styled-components';

function Sidebar({ onBrowserSelect, onCategorySelect, browser, categories, category }) {
  return (
    <Wrapper>
      <Section>
        <Title>Browsers</Title>
        <Button active={browser === 'chrome'} onClick={() => onBrowserSelect('chrome')}>
          Chrome
        </Button>
        <Button active={browser === 'firefox'} onClick={() => onBrowserSelect('firefox')}>
          Firefox
        </Button>
      </Section>
      {browser === 'chrome' && <Section>
        <Title>Categories</Title>
        {categories.map(item => {
          return (
            <Button active={category === item} key={item} onClick={() => onCategorySelect(item)}>{item}</Button>
          )
        })}
      </Section>}
        
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
const Title = styled.div``;

const Wrapper = styled.div`
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`;