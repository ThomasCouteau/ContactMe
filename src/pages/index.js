import React from 'react'
import MeCard from '../components/card'
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'
import MeAppBar from '../components/appBar'

const IndexPage = () => {

  return (
    <main>
      <Helmet>
        <link rel='icon' href={favicon} />
        <title>Me contacter</title>
      </Helmet>
      <MeAppBar />
      <MeCard />
    </main>
  )
}

export default IndexPage