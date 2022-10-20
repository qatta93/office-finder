/* global google */
import type { NextPage } from 'next'
import styled from 'styled-components';
import {useEffect, useState } from 'react';
import Axios from "axios";

// const center = { lat: 59.911491, lng: 10.757933}

const test = () => {
  return 0;
}


const Maps: NextPage = (props) => {
  const [coordinates, setCoordinates] = useState<Object>({lat: '', long: ''})
  const [origin, setOrigin] = useState('')
  
  console.log(coordinates)
  console.log(origin)
  console.log(props)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({lat: position.coords.latitude, long: position.coords.longitude})
    })
  }, [])

  useEffect(() => {
    // fetch data to get a location name based on coordinates

    
  }, [coordinates])

  const handleSubmit = (event:React.SyntheticEvent): void => {
    event.preventDefault();
  }

  return (
    <Section>
        <h1>Maps</h1>
        <h2>Provide your current location to see the closest offices on the map</h2>
        <Form>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Location"
              name="origin"
              required
              onChange={event => setOrigin(event.target.value)}
              value={origin}
            />
            <button
              type="submit"
              value="Download CTA"
            >
              Let's go!
            </button>
          </form>
        </Form>  
    </Section>
  )
}

export default Maps;

export const getStaticProps = async () => {
  const res = await Axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=51.2465&lon=22.5684&limit=1&appid=${process.env.NEXT_PUBLIC_GEOCODING_API_KEY}`);
  return {
    props: { data: `${res.data[0].name}, ${res.data[0].country}` },
  };
};

const Section = styled.section`
  padding: 0.5rem;
  height: calc(100vh - 130px);
  overflow: scroll;

  &::-webkit-scrollbar {
  display: none;
  }

  h1 {
    text-align: center;
    font-size: 1.7rem;
    color: #E1FDFF;
    margin-bottom: 0.8rem;

    @media only screen and (min-width: 576px) {
      margin-bottom: 2rem;
    }
  }

  h2 {
    text-align: center;
    margin: 1rem 0 2rem;
    font-weight: 200;
    font-size: 1rem;
    color: white;
  }
`

const Form = styled.section`
  display: flex;
  justify-content: center;

  input {
    padding: .7rem 1rem;
    margin-right: 1rem;
    background-color: rgba(255, 255, 255, 0.705);
    border: none;
    box-shadow: inset 2px 2px 5px #b8b9be,inset -8px -8px 15px #fff!important;
    border-radius: 0.8rem;
  }

  button {
    padding: .7rem 1rem;
    margin-right: 1rem;
    background-color: #E1FDFF;
    border: none;
    box-shadow: 1px 1px 5px #b8b9be, 1px 1px 15px #fff!important;
    border-radius: 0.8rem;
    cursor: pointer;
  }
`