import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const About: NextPage = () => {
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
    <Section>
        <h1>ABOUT</h1>
        <Wrapper>
          <Notepad>
            <Image src='/images/notepad.png' alt='notepad' width='300px' height='300px' className='notebook__img'></Image>
            <p>Office Finder can help you with finding comfortable space to work! Are you traveling? Don't you have a comfy desk at home? Check our <Link href='/maps' className='link'>maps</Link> to find offices close to you.</p>
          </Notepad>
          {windowWidth && windowWidth > 1023 && <Image src='/images/designer.png'  alt='designer' width='300px' height='300px' className='designer__img'></Image>}
        </Wrapper>
    </Section>
  )
}

export default About;

const Section = styled.section`
  padding: 0.5rem;
  height: calc(100vh - 130px);
  background-image: url("images/paper.png");
  background-size: auto 100%;
  background-size: cover;


  h1 {
    text-align: center;
    font-size: 1.7rem;
    color: #E1FDFF;
  }
`
const Wrapper = styled.section`
.designer__img {
    opacity: 0.5;
}

@media only screen and (min-width: 1024px) {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2rem;
  height: calc(100vh - 257px);
}

`

const Notepad = styled.section`
  padding: 0 1rem 0 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


  @media only screen and (min-width: 578px) {
    margin-top: 4rem;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0rem;
    .notebook__img {
    }
  }


  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    text-align: center justify;
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: #565656cf;
    text-indent: 1.5rem;

    @media only screen and (min-width: 480px) {
      width: 250px;
      left: 47%;
      font-size: 1.3rem;
      line-height: 1.7rem;
    }
    @media only screen and (min-width: 768px) {
      left: 49%;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 1rem;
      width: 200px
    }

    &>* {
      font-weight: bold;
      color: black;
    }
  }

`