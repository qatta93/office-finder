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
  min-height: 100vh;
  position: relative;
`;

const Main = styled.section`

`