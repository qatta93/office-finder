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
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100;300;500;700&family=Cormorant+Garamond:wght@400;600&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet");
  background-color: #B2AFE5;
`;

const Main = styled.section`
  min-height: 82vh;
`