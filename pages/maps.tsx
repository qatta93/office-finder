import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Maps: NextPage = () => {
  return (
    <Section>
        <p>Maps</p>
    </Section>
  )
}

export default Maps;

const Section = styled.section`
  padding: 0.5rem;
  &>* {
    color: white;
  }
`