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
  background-color: #B2AFE5;
`;

const Main = styled.section`
  min-height: 82vh;
`