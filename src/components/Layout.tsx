import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styled from 'styled-components';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {


  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;