import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Section>
      <Title>
        <h1>Are you traveling?</h1>
        <h2>Do you need a comfy desk?</h2>
        <p>find your new office close to you!</p>
        <Image src='/images/Group 2.png' width='180px' height='60px' alt='btn'></Image>
      </Title>

    </Section>
  )
}

export default Home


const Section = styled.section`
  min-height: 82vh;
`

const Title = styled.section`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 28px;

  h1 {
    font-size: 32px;
    margin-bottom: 0.5rem;
    color: #E1FDFF;
  }

  h2 {
    font-size: 24px;
    color: #E1FDFF;
  }

  p {
    color: white;
    font-size: 1.2rem;
    font-weight: 100;
    margin: 3rem 0;
  }
`