import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../common/components/Footer/Footer'
import Header from '../common/components/Header/Header'
import Navbar from '../common/components/Navbar/Navbar'
import Results from '../common/components/Results/Results'
import requests from '../common/utils/requests'

interface HomeProps {
  results: []

}

const Home: NextPage<HomeProps> = ({ results }: HomeProps) => {
  //console.log(results)
  return (
    <>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu Clone App By Adham Tarek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
      <Footer />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string
  const res = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  )
  const data = await res.json()
  return {
    props: {
      results: data.results
    }
  }
}

