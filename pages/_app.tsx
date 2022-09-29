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
        {/* <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`} type="text/javascript"></script> */}
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}></script>
      </Helmet>
      <Layout>
        <GlobalCSS />
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp

