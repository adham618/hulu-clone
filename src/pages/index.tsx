import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../common/components/Header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
