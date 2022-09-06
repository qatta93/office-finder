import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

export const FooterSection = () => {
  return (
    <Footer>
      <p>Coded by <Link href='https://patrycja.info' target="_blank">Qatta</Link> @2022</p>
    </Footer>
  )
}

const Footer = styled.section`
  background-color: #ffffff70;
  min-height: 8vh;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  
  p {
    color: #9591DE;
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
  }
  a {
    font-weight: 600;
  }
`
