import type { NextPage } from 'next'
import styled from 'styled-components'
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { lazy, Suspense, useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [splineLoad, setSplineLoad] = useState<boolean>(false);
  const [showFallback, setShowFallback] = useState<boolean>(true)

  console.log(splineLoad)

  useEffect(() => {
    setTimeout(function(){ 
      setShowFallback(false)
    }, 4000);
  }, [splineLoad])

console.log('showfallback', showFallback)

  const router = useRouter()

  function onBtnClickHandle(){
    console.log('its working')
    setTimeout(function(){ 
      router.push({
        pathname: '/maps',
      })
 }, 1000);
}

const Spline = React.lazy(() => import('@splinetool/react-spline'));

  return (
    <Section>
      <Title>
        <h1>Are you traveling?</h1>
        <h2>Do you need a comfy desk?</h2>
        <p>find your new office close to you!</p>
        <StyledButton onClick={() => onBtnClickHandle()}>
          <p>CHECK D<span><Image src='/images/desk.png' width='22px' height='38px' alt='desk'></Image></span>SK OUT</p>
        </StyledButton>
      </Title>
      <Suspense fallback={<div>Loading...</div>}>
        <Animation>
          {showFallback === true &&<ImageFallback src='/images/fallback.png' height='360px' width='780px'></ImageFallback>}
          <Spline scene="https://prod.spline.design/zdiY1j0MFRfdisjV/scene.splinecode" onLoad={() => setSplineLoad(true)}/>
        </Animation>
      </Suspense>
    </Section>
  )
}

export default Home


const Section = styled.section`
  overflow: hidden;
  min-height: 70vh;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    min-height: 82vh;
  }
`

const Title = styled.section`
  font-family: 'Open Sans', sans-serif;
  text-align: center;

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

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 45px;
    }
  
    h2 {
      font-size: 28px;
      margin-top: 1rem;
    }
  
    p {
      font-size: 1.2rem;
      margin: 3rem 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 7rem;

    h1 {
      font-size: 40px;
    }
  
    h2 {
      font-size: 24px;
      margin-top: 1rem;
    }
  
    p {
      font-size: 1.2rem;
      margin: 3rem 0;
    }
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

  &:hover {
    transform: scale(1.08);
  }

`

const Animation = styled.section`
  padding: 2rem 0;
  height: 300px;
  position: relative;

  &>* {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 768px) {
    height: 450px;
  }

  @media only screen and (min-width: 1024px) {
    flex: 55%;

    &>* {
      top: 45%;
      left: 60%;
      transform: translate(-50%, -50%);
    }
  }
  @media only screen and (min-width: 1200px) {

    &>* {
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const ImageFallback = styled(Image)`

  &:hover {
    zoom: 200%;
  }
`