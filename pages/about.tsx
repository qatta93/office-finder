import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <Section>
        <p>About</p>
    </Section>
  )
}

export default About;

const Section = styled.section`
  padding: 0.5rem;
`