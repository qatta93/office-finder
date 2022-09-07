import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const Home: NextPage = () => {
  return (
    <Section>
      <Title>
        <h1>Are you traveling?</h1>
        <h2>Do you need a comfy desk?</h2>
        <p>find your new office close to you!</p>
        <Link href="/maps">
          <Image src='/images/btn.png' width='180px' height='60px' alt='btn'></Image>
        </Link>
      </Title>
      <Animation>
        <Spline scene="https://prod.spline.design/zdiY1j0MFRfdisjV/scene.splinecode" />
      </Animation>
    </Section>
  )
}

export default Home


const Section = styled.section`

`

const Title = styled.section`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 28px;

  h1 {
    font-size: 34px;
    margin-bottom: 0rem;
    color: #E1FDFF;
    font-weight: 500;
  }

  h2 {
    font-size: 25px;
    color: #E1FDFF;
    font-weight: 500;
    margin-top: 0.6rem;
  }

  p {
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: 100;
    margin: 2rem 0;
  }
`

const Animation = styled.section`

`