/* global google */
import type { NextPage } from 'next'
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { SetStateAction, useCallback, useEffect, useState } from 'react';

const center = { lat: 59.911491, lng: 10.757933}


const Maps: NextPage = () => {

  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const handleSubmit = (event:React.SyntheticEvent): void => {
    event.preventDefault();
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
  })

  if(isLoaded){
    console.log('el')
  }

//   useEffect(() => {
// /* global google */
//     let map;

//     function initMap() {
//             map = new window.google!.maps.Map(document.getElementById("map") as HTMLElement, {
//             center: { lat: -34.397, lng: 150.644 },
//             zoom: 8,
//         });
//     }
//     initMap();

//   }, [])
  


  return (
    <Section>
        <h1>Maps</h1>
        <h2>Page is still in progress</h2>
        {/* <Form>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Origin"
              name="origin"
              required
              onChange={event => setOrigin(event.target.value)}
              value={origin}
            />
            <input
              type="text"
              placeholder="Destination"
              name="destination"
              required
              onChange={event => setDestination(event.target.value)}
              value={destination}
            />
            <button
              type="submit"
              value="Download CTA"
            >
              Calculate Route
            </button>
            <p>Distance:</p>
            <p>Duration:</p>
          </form>
        </Form>
        <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>

        </GoogleMap> */}
        {/* <div id='map'></div> */}
        
    </Section>
  )
}

export default Maps;

const Section = styled.section`
  padding: 0.5rem;
  height: calc(100vh - 130px);
  overflow: scroll;

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
    margin-top: 4rem;
    font-weight: 200;
  }
`

const Form = styled.section`
`