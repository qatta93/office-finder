import '../styles/global.css.ts'
import type { AppProps } from 'next/app'
import { Layout } from '../src/components/Layout'
import GlobalCSS from '../styles/global.css'
import {Helmet} from "react-helmet";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Helmet>
      <title>Office Finder</title>
        <meta name="description" content="Find your new office" />
        <link rel="icon" href="/images/worker_purple.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;300;500;700&family=Cormorant+Garamond:wght@400;600;800&family=Open+Sans:wght@300;400;500&display=swap" />
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}></script>
        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css"></link>
      </Helmet>
      <Layout>
        <GlobalCSS />
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp

