import React from 'react'
import MeCard from '../components/card'
import favicon from '../images/icon.png'
import Helmet from 'react-helmet'
import MeAppBar from '../components/appBar'

const IndexPage = () => {

  return (
    <main color='secondary'>
      <Helmet>
        <link rel='icon' href={favicon} />
        <title>Couteau Thomas</title>
      </Helmet>
      <MeAppBar />
      <MeCard />
    </main>
  )
}

export default IndexPage