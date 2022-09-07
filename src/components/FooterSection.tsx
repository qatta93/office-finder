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
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffff95;
  height: 55x;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  
  p {
    color: #9591DE;
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
  }
  a {
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    color: #8783d7;
    margin: 0 0.2rem;
    font-size: 1.05rem;
  }
`
