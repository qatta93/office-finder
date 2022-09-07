import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

export const NavbarSection = () => {
  return (
    <Navbar>
      <section>
        <Image src='/images/worker_white.png' width='60px' height='50px' alt='logo'/>
        <h1>Office Finder</h1>
      </section>
      <Menu>
        <Image src='/images/menu.png' width='45px' height='45px' alt='menu'/>
      </Menu>
    </Navbar>
  )
}

const Navbar = styled.section`
  height: 60px;
  display: flex;
  flex-direction: row;
  border-bottom: 1.5px solid white;
  vertical-align: middle;
  justify-content: space-between;
  padding: 0 0.7rem;

  section {
    display: flex;
    flex-direction: row;
    padding-top: 7px;

    h1 {
      color: white;
      font-family: 'Antonio', sans-serif;
      font-weight: 100;
      font-size: 1.7rem;
      margin: auto 1rem;
    }
  }
`

const Menu = styled.section`
  padding-right: .2rem;
  padding-bottom: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
