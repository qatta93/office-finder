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
            <Image src='/images/notepad.png' alt='notepad' layout="fill"></Image>
            <p>Office Finder can help you with finding comfortable space to work! Are you traveling? Don't you have a comfy desk at home? Check our <Link href='/maps' className='link'>maps</Link> to find offices close to you.</p>
          </Notepad>
          {windowWidth && windowWidth > 1023 
          && 
          <Graphic>
            <Image src='/images/designer.png'  alt='designer' layout="fill"></Image>
          </Graphic>}
        </Wrapper>
    </Section>
  )
}

export default About;

const Graphic = styled.section`
  padding: 0 3rem 0 0;
  position: relative;
  height: 300px;
  min-width: 30vw;
  max-width: 40vw;
  margin: auto 0;
  opacity: 0.7;

  @media only screen and (min-width: 1200px) {
    height: 400px;
  }
`

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

  @media only screen and (min-width: 1200px) {
    padding: 0.5rem 3rem;
  }
`
const Wrapper = styled.section`
  width: 100%;
  height: 400px;

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
  height: 300px;
  min-width: 50vw;
  max-width: 70vw;
  margin: 0 auto;
  


  @media only screen and (min-width: 578px) {
    margin-top: 4rem;
    height: 400px;
    min-width: 50vw;
    max-width: 60vw;
  }
  @media only screen and (min-width: 768px) {
    height: 450px;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0rem;
    height: 330px;
    min-width: 40vw;
    max-width: 50vw;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 2rem;
    height: 450px;
  }
  }


  p {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 45%;
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
    @media only screen and (min-width: 578px) {
      width: 300px;
      left: 44%;
      font-size: 1.5rem;
      line-height: 1.9rem;
    }
    @media only screen and (min-width: 768px) {
      left: 45%;
      font-size: 1.7rem;
      line-height: 2.2rem;
    }
    @media only screen and (min-width: 1024px) {
      width: 300px;
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media only screen and (min-width: 1200px) {
      left: 43%;
      width: 350px;
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

    &>* {
      font-weight: bold;
      color: black;
    }
  }

`