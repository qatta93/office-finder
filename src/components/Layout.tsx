import React from 'react';
import { NavbarSection } from './NavbarSection';
import { FooterSection } from './FooterSection';
import styled from 'styled-components';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {


  return (
    <Wrapper>
      <NavbarSection />
      <Main>{children}</Main>
      <FooterSection />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,300&display=swap" rel="stylesheet");
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100;300;500;700&display=swap" rel="stylesheet");
  background-color: #B2AFE580;
`;

const Main = styled.section`
  min-height: 83vh;
`