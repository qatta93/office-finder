import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

export const NavbarSection = () => {
  return (
    <Navbar>
      <Image src='/images/worker_white.png' width='60px' height='50px' alt='logo'/>
    </Navbar>
  )
}

const Navbar = styled.section`
  min-height: 9vh;
  border-bottom: 1.5px solid white;
  vertical-align: middle;

`
