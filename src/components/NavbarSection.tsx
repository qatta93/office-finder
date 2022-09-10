import React, { useEffect, useState} from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  setMenuPopup: (menuPopup: boolean) => void;
  menuPopup: boolean
}

export const NavbarSection = ({setMenuPopup, menuPopup}:Props) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Navbar>
      <section>
        <Link href="/"><Image src='/images/worker_white.png' width='60px' height='50px' alt='logo'/></Link>
        <Link href="/"><h1>Office Finder</h1></Link>
      </section>
      <Menu>
        {windowWidth && windowWidth > 575 ? 
          <>
            <Link href="/maps">MAPS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </>
          :
          <Image src='/images/menu.png' width='45px' height='45px' alt='menu' onClick={() => setMenuPopup(!menuPopup)}/>
        }
      </Menu>
    </Navbar>
  )
}

const Navbar = styled.section`
  height: 60px;
  display: flex;
  flex-direction: row;
  border-bottom: 1.5px solid #ffffff;
  vertical-align: middle;
  justify-content: space-between;
  padding: 0 0.7rem;

  section {
    display: flex;
    flex-direction: row;
    padding-top: 7px;

    &>* {
      cursor: pointer;
    }

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

  a {
    text-decoration: none;
    color: white;
    margin-left: 1.3rem;
    border: 1px solid #ffffff40;
    padding: 0.4rem 0.5rem;
    cursor: pointer;
  }
`
