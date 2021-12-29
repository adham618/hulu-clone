import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../common/components/Header/Header'
import Navbar from '../common/components/Navbar/Navbar'
import Requests from '../common/components/Requests/Requests'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu Clone App By Adham Tarek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Requests />
    </>
  )
}

export default Home
