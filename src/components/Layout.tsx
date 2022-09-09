import React, { useState } from 'react';
import { NavbarSection } from './NavbarSection';
import { FooterSection } from './FooterSection';
import styled from 'styled-components';
import Link from 'next/link';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {

  const [menuPopup, setMenuPopup] = useState<boolean>(false);

  console.log(menuPopup)

  return (
    <Wrapper>
      <NavbarSection menuPopup={menuPopup} setMenuPopup={setMenuPopup}/>
      {/* @ts-ignore */}
      <Main>
        <Menu className={menuPopup === true ? 'showMenu' : 'hideMenu'}>
          <MenuBtns className={menuPopup === true ? 'showMenuBtns' : 'hideMenuBtns'}>
            <Link href='/'>HOME</Link>
            <Link href='/maps'>MAPS</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/contact'>CONTACT</Link>
          </MenuBtns>
          {children}
        </Menu>
      </Main>
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
  position: relative;

  .showMenu {
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - 115px);
    z-index: 111;
    overflow: hidden;

    > * {
      &:last-child {
         opacity: 0.2;
      }
    }
    } 
`

const Menu = styled.section`
  .showMenuBtns {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    display: flex;
    flex-direction: column;
    text-align: center;
    
    &>* {
      text-decoration: none;
      margin: 1rem 0;
      border: 1px solid #B2AFE5;
      padding: 0.5rem 1rem;
      background-color: white;
      cursor: pointer;
    }

  }
`

const MenuBtns = styled.section`
    display: none;
`