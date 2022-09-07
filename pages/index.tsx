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
          <StyledButton>
            <p>CHECK D<span><Image src='/images/desk.png' width='22px' height='38px' alt='desk'></Image></span>SK OUT</p>
          </StyledButton>
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
    font-size: 1.1rem;
    font-weight: 100;
    margin: 2rem 0;
  }
`

const StyledButton = styled.section`
  position: relative;
  height: 60px;
  width: 180px;
  margin: 0 auto;
  border-radius: 3px;
  background-color: #49494935;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  
  &:hover {
  transform: scale(1.08);
  }

  p {
    font-family: 'Antonio', sans-serif;
    font-size: 1.5rem;
    margin: 0;

    span{
      margin: 0 0.02rem 0 0.05rem;

      &>* {
        top: 9px;
      }
    }

  }

`

const Animation = styled.section`

`