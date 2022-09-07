import '../styles/global.css.ts'
import type { AppProps } from 'next/app'
import Head from 'next/head';
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;300;500;700&family=Cormorant+Garamond:wght@400;600&family=Open+Sans:wght@300;400;500&display=swap" />
      </Helmet>
      <Layout>
        <GlobalCSS />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

