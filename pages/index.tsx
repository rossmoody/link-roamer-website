import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import BackgroundBursts from '../components/BackgroundBursts'
import HighlightSection from '../components/HighlightSection'
import Layout from '../components/Layout'
import Main from '../components/Main'

const meta = {
  title: 'Link Roamer',
  description:
    'A free and open-source browser extension for finding, organizing, inspecting, bookmarking, grouping, and exporting all the links on a page.',
  author: '@_rossmoody',
  url: 'https://www.linkroamer.com',
}

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={meta.url} />
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.author} />
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={`${meta.url}/og-image.png`} />
        <meta property="og:image" content={`${meta.url}/og-image.png`} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Layout>
        <Main />
        <HighlightSection />
        <BackgroundBursts />
      </Layout>
    </React.Fragment>
  )
}

export default Home
