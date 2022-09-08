import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <Section>
        <h1>ABOUT</h1>
        <Notepad>
          <Image src='/images/notepad.png' alt='notepad' width='400px' height='400px' className='notepad__img'></Image>
          <p>Office Finder can help you with finding comfortable space to work! Are you traveling? Don't you have a comfy desk at home? Check our <Link href='/maps' className='link'>maps</Link> to find offices close to you.</p>

        </Notepad>
    </Section>
  )
}

export default About;

const Section = styled.section`
  padding: 0.5rem;
  height: calc(100vh - 130px);
  background-image: url("images/paper.png");
  background-size: cover;

  h1 {
    text-align: center;
    font-size: 1.7rem;
    color: #E1FDFF;
  }
`

const Notepad = styled.section`
  padding: 0 1rem 0 3rem;
  position: relative;

  .notepad__img {

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

    &>* {
      font-weight: bold;
      color: black;
    }
  }

`