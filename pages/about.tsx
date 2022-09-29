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
            <section>
              <p>Office Finder can help you with finding comfortable space to work!</p> 
              <p>Are you traveling?</p>
              <p>Don't you have a comfy desk at home?</p>
              <p>Check our <Link href='/maps' className='link'>maps</Link> to find offices close to you.</p>
            </section>
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
  padding: 0 1rem 0 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  min-width: 30vw;
  max-width: 40vw;
  margin: 3rem auto;
  opacity: 0.8;

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
  overflow: scroll;


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

  @media only screen and (min-width: 480px) {
    height: 400px;
  }
  @media only screen and (min-width: 576px) {
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

  section {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 200px;
    text-align: center;

    @media only screen and (min-width: 480px) {
      width: 250px;
      left: 45%;
    }
    @media only screen and (min-width: 578px) {
      width: 300px;
      left: 44%;
    }
    @media only screen and (min-width: 768px) {
      left: 45%;
    }
    @media only screen and (min-width: 1024px) {
      width: 300px;
    }
    @media only screen and (min-width: 1200px) {
      left: 43%;
      width: 350px;
    }

    &>* {
      margin: 0.6rem 0;
      color: #787878;
      font-size: 1.1rem;
      line-height: 1.3rem;

      @media only screen and (min-width: 480px) {
      font-size: 1.3rem;
      line-height: 1.7rem;
    }
    @media only screen and (min-width: 578px) {
      font-size: 1.5rem;
      line-height: 1.9rem;
    }
    @media only screen and (min-width: 768px) {
      font-size: 1.7rem;
      line-height: 2.2rem;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }

      a {
        text-decoration: none;
        font-weight: bold;
        background-color: #a0a2e566;
        padding: 0.1rem 0.3rem;
        margin: 0 0.2rem;
        cursor: pointer;
      }
    }
  }
`